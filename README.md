# Storage-Cloud
Applicazione web realizzata con spring boot ed esposizione API. Questo progetto simula uno storage cloud dove posso essere salvati immagini, video, messaggi di testo, progetti e un area personale.

Nell’area personale si possono salvare tutti i tipi di file desiderati ma per accederci bisogna reinserire la password dell’account di nuovo come misura di sicurezza

La parte del client è stata sviluppata interamente con angular che utilizza le funzionalità esposte dal rest controller sviluppato tramite spring boot.

Per la memorizzazione dei file multimediali è stato usato Mongo DB e GridFs

- Progetto spring boot
- Database: MongoDB 7.0
- Front end: html 5, css, Angular 17, PrimeFaces, PrimeNG, PrimeIcons
- Server: Tomcat 9
- Test: JUnit 5

## Dependecy Utilizzate:

- Spring Data MongoDB
- Spring RestData
- Spring Lombok
- Spring Web MVC

## Dettagli implementazioni:

- Implementazione dei model per ogni tipo di file, e il campo del nome è stato impostato su *@Indexed*(unique = true)

- Implementazione dei repository, service e service impl.

- Per memorizzare i file multimediali all’interno del controller è stato inserito come parametro un oggetto di tipo MultiPartFile, dal quale poi verranno estratti l’input stream, nome del file e content type.
- `MultipartFile` è un'interfaccia in Spring Framework che rappresenta un file caricato tramite un modulo HTML con l'attributo `enctype="multipart/form-data"`. Questo tipo di richiesta viene utilizzato per inviare file binari, come immagini, documenti, video, ecc., da un client a un server web.

```java
@PostMapping("/uploadImmagine")
	public ServerResponse uploadImmagine(@RequestParam("file") MultipartFile file,
			@RequestParam("descrizione") String descrizione, @RequestParam("usernameUtente") String usernameUtente) {
		ObjectId gridFsId;
		if(!immagineService.trovaPerNome(file.getOriginalFilename()).isEmpty()) {
			return new ServerResponse(1, "Immagine con nome già esistente");
		}
		try {
			gridFsId = gridFsTemplate.store(file.getInputStream(), file.getOriginalFilename(), file.getContentType());
			// Crea il documento Immagine
			Immagine immagine = new Immagine();
			immagine.setNome(file.getOriginalFilename());
			immagine.setDescrizione(descrizione);
			immagine.setGridFsId(gridFsId.toHexString());
			immagine.setTipoMime(file.getContentType());
			immagine.setDimensione(file.getSize());
			immagine.setDataCreazione(new Date());
			immagine.setUsernameUtente(usernameUtente);
			immagineService.salvaImmagine(immagine);

			return new ServerResponse(0, immagine);
		} catch (IOException e) {
			System.err.println("errore nel salvataggio dell'immagine");
			e.printStackTrace();
			return new ServerResponse(1, "Errore nel salvataggio dell'immagine");
		}
	}
```

- GridFs inoltre fornisce una serie di metodi per le operazioni col db, come ad esempio store(), delete(), findOne()

- Per l’ottenimento dei file multimediali per id è stato utilizzato il “findOne()” di GridFs.
- Ottenuto il file lo si associa ad una risorsa di tipo “GridFsResource “ col metodo getResource(nomeVariabileFile)
- Dalla risorsa si preleva l’inputStream attraverso il getInputStream() e lo si assegna ad un array di byte, facendo in modo di ottenere i fileData.
- Infine si ritorna un oggetto di tipo ResponseEntity specificando il mediaType e un body con all’interno il fileData popolato precedentemente

```java
@GetMapping("/getImmagine/{id}")
	public ResponseEntity<byte[]> getImmagine(@PathVariable String id) {
		GridFSFile file = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(id)));
		if (file != null) {
			GridFsResource resource = gridFsTemplate.getResource(file);
			byte[] fileData;
			try {
				fileData = StreamUtils.copyToByteArray(resource.getInputStream());
				return ResponseEntity.ok()
						.contentType(MediaType.parseMediaType(file.getMetadata().get("_contentType").toString()))
						.body(fileData);
			} catch (IllegalStateException e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			} catch (IOException e) {
				e.printStackTrace();
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
			}
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
```

- Nel metodo del controller del file personale ci sono alcuni parametri settati come opzionali: *@RequestParam*(value = "file", required = false), questo perchè nel model di dati del file personale sono inseriti tutti i tipi di dato delle tipologie di file caricabili nello storage. Quindi ci sarà l’url del messaggio di testo, il nome del messaggio di testo e file di tipo MultiPartFile.
- Viene inoltre passatto un parametro che indica il tipo di contenuto, quindi se si tratta di un immagine, video, progetto o messaggio di testo. Necessario per impostare tutti i casi e capire quale metodo setter chiamare per impostare l’oggetto FilePersonale da salvare nel db.

```java
@PostMapping("/uploadFilePersonale")
	public ServerResponse uploadFilePersonale(@RequestParam(value = "file", required = false) MultipartFile file,
			@RequestParam("descrizione") String descrizione, @RequestParam(value = "url", required = false) String url,
			@RequestParam("usernameUtente") String usernameUtente,
			@RequestParam(value = "nome", required = false) String nome,
			@RequestParam("tipoContenuto") String tipoContenuto) {

		ObjectId gridFsId = null;
		try {
			// Se il tipo di contenuto non è 'testo', esegui l'upload del file
			if (!"testo".equalsIgnoreCase(tipoContenuto)) {
				gridFsId = gridFsTemplate.store(file.getInputStream(), file.getOriginalFilename(),
						file.getContentType());
			}

			// Crea il documento FilePersonale
			FilePersonale filePersonale = new FilePersonale();
			filePersonale.setDescrizione(descrizione);
			filePersonale.setUsernameUtente(usernameUtente);
			filePersonale.setDataCreazione(new Date());

			// Impostazioni specifiche in base al tipo di contenuto
			if ("immagine".equalsIgnoreCase(tipoContenuto) || "video".equalsIgnoreCase(tipoContenuto)
					|| "progetto".equalsIgnoreCase(tipoContenuto)) {
				
				filePersonale.setNome(file.getOriginalFilename());
				filePersonale.setGridFsId(gridFsId != null ? gridFsId.toHexString() : null);
				filePersonale.setTipoFile(file.getContentType());
				filePersonale.setDimensione(file.getSize());

			} else if ("testo".equalsIgnoreCase(tipoContenuto)) {
				filePersonale.setNome(nome + ".txt"); // Se il nome del testo viene fornito nella descrizione
				filePersonale.setUrl(url);// Se c'è un URL opzionale
				filePersonale.setDimensione(descrizione.length());
			}

			// Salva il documento FilePersonale nel database
			filePersonaleService.salvaFilePersonale(filePersonale);

			return new ServerResponse(0, filePersonale);

		} catch (IOException e) {
			System.err.println("Errore nel salvataggio del file personale");
			e.printStackTrace();
			return new ServerResponse(1, "Errore nel salvataggio del file personale");
		}
	}

```

- Sulla parte di angular l’upload si basa un modal che viene visualizzato al click del bottone apposito dove vengono inseriti tutti parametri da un piccolo form e viene permesso l’upload del file. Sono previsti controlli sul tipo di file che deve essere conforme e al nome del file che deve essere univoco e quindi non presente già nello storage. I relativi messaggi di errore e di successo dell’upload vengono mostrati attraverso un toaster.

- La visualizzazione dei file è tabellare con le varie colonne che specificano informazioni su quel file/messaggio di gesto. Le colonne sono ordinabili in maniera crescente o decrescente sfruttando i componenti di prime ng. E’ anche possibile effettuare un ricerca per nome, descrizione,dimensione del file dall’apposita barra di ricerca.
- Sono previste funzioni di eliminazione della riga della tabella e del download del file.
- Per le immagini è possibile cliccare sulla preview di essa per visualizzarla per intero inserendola in una p-card di prime ng.
- Per i video invece è possibile cliccare l’apposito link posto al di sotto per aprire il video in un’altra scheda sfruttando il media player predefinito del browser.

```html
<video [src]="videoUrl" controls autoplay style="width: 100%; height: auto;"></video>
```

```tsx
ngOnInit(): void {
    this.route.params.subscribe(params => {
      const videoId = params['id'];
      this.videoUrl = this.apiService.getVideoUrl(videoId);
    });
  }
```

- Per le funzioni download dei file multimediali viene preso l’url e attraverso la funzione fetch() viene convertito in blob

```tsx
downloadImage(immagine: any): void {
    const imageUrl = this.getImmagineUrl(immagine.gridFsId);

    // Fetch the image and convert it to a blob
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = immagine.nome;  // Nome del file che verrà scaricato
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Errore nel download dell\'immagine:', error));
  }
```

- Per il messaggio di testo viene semplicemente creato un oggetto blob di tipo text/plain

```tsx
downloadMessaggio(messaggio: any): void {
    // Crea un Blob con solo la descrizione e url del messaggio
    const textBlob = new Blob([messaggio.descrizione, messaggio.url], { type: 'text/plain' });
    const url = window.URL.createObjectURL(textBlob);

    // Crea un link temporaneo per avviare il download
    const link = document.createElement('a');
    link.href = url;
    link.download = messaggio.nome;

    // Aggiungi il link al DOM, cliccalo per avviare il download, e poi rimuovilo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Rilascia l'URL temporaneo
    window.URL.revokeObjectURL(url);
  }
```
