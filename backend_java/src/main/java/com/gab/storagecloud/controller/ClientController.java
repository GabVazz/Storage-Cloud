package com.gab.storagecloud.controller;

import java.io.IOException;
import java.util.Date;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.gab.storagecloud.model.FilePersonale;
import com.gab.storagecloud.model.Immagine;
import com.gab.storagecloud.model.MessaggioTesto;
import com.gab.storagecloud.model.Progetto;
import com.gab.storagecloud.model.Utente;
import com.gab.storagecloud.model.Video;
import com.gab.storagecloud.service.FilePersonaleService;
import com.gab.storagecloud.service.ImmagineService;
import com.gab.storagecloud.service.MessaggioTestoService;
import com.gab.storagecloud.service.ProgettoService;
import com.gab.storagecloud.service.UtenteService;
import com.gab.storagecloud.service.VideoService;
import com.gab.storagecloud.utils.LoginRequest;
import com.gab.storagecloud.utils.ServerResponse;
import com.mongodb.client.gridfs.model.GridFSFile;

@RequestMapping(value = "/api")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@RestController
public class ClientController {

	@Autowired
	UtenteService utenteService;

	@Autowired
	private GridFsTemplate gridFsTemplate;

	@Autowired
	ImmagineService immagineService;
	@Autowired
	VideoService videoService;
	@Autowired
	MessaggioTestoService messaggiService;
	@Autowired
	ProgettoService progettoService;
	@Autowired
	FilePersonaleService filePersonaleService;

	/********************* REGISTRAZIONE **********************/
	@PostMapping("/registrazione")
	public ServerResponse registrazione(@RequestBody Utente utente) {
		if (!utenteService.trovaPerUsername(utente.getUsername()).isEmpty()) {
			return new ServerResponse(1, "Username utente già esistente, scegli un'altro username!");
		}
		// creata una altra istanza di utente, per far generare l'id automaticamente
		// ed evitare la sovrascrittura di un nuovo utente con quello vecchio
		Utente utenteDB = new Utente();
		utenteDB.setEmail(utente.getEmail());
		utenteDB.setNome(utente.getNome());
		utenteDB.setPassword(utente.getPassword());
		utenteDB.setUsername(utente.getUsername());
		utenteService.salvaUtente(utenteDB);
		return new ServerResponse(0, "Registrazione avvenuta con successo!");
	}

	/********************* LOGIN **********************/
	@PostMapping("/login")
	public ServerResponse login(@RequestBody LoginRequest loginRequest) {

		Utente utente = new Utente();
		utente.setUsername(loginRequest.getUsername());
		utente.setPassword(loginRequest.getPassword());

		if (utenteService.trovaPerUsername(utente.getUsername()).isEmpty()) {
			return new ServerResponse(1, "Utente non trovato!");
		}

		if (!utenteService.trovaPerUsername(utente.getUsername()).isEmpty() && !utenteService
				.trovaPerUsername(utente.getUsername()).get().getPassword().equals(loginRequest.getPassword())) {
			return new ServerResponse(1, "Password errata!");
		}

		return new ServerResponse(0, "Login avvenuto con successo!");
	}

	/********************* IMMAGINI **********************/
	@GetMapping("/ottieniImmagini")
	public ServerResponse ottieniImmagini(@RequestParam String username) {
		if (immagineService.trovaTuttiPerUsernameUtente(username) == null) {
			
			return new ServerResponse(1, "Errore durante il caricamento delle immagini");
		}
		//System.err.println("errore");
		return new ServerResponse(0, immagineService.trovaTuttiPerUsernameUtente(username));
	}

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

	@DeleteMapping("/cancellaImmagine")
	public ServerResponse cancellaImmagine(@RequestParam("gridFsId") String gridFsId) {
		try {
			// System.err.println("cancella");
			// Controlla se l'immagine esiste
			Optional<Immagine> immagineOptional = immagineService.trovaPerIdGridFd(gridFsId);
			if (!immagineOptional.isPresent()) {
				return new ServerResponse(1, "Immagine non trovata");
			}

			// Rimuovi l'immagine dallo storage GridFS
			gridFsTemplate.delete(Query.query(Criteria.where("_id").is(new ObjectId(gridFsId))));

			// Rimuovi il documento dal repository delle immagini
			immagineService.cancellaPerId(immagineOptional.get().getId()); // Correzione per cancellare l'immagine dal
																			// repository

			return new ServerResponse(0, "Immagine cancellata con successo");
		} catch (Exception e) {
			System.err.println("Errore nella cancellazione dell'immagine");
			e.printStackTrace();
			return new ServerResponse(1, "Errore nella cancellazione dell'immagine");
		}
	}

	/********************* VIDEO **********************/
	@GetMapping("/ottieniVideo")
	public ServerResponse ottieniVideo(@RequestParam String username) {
		if (videoService.trovaTuttiPerUsernameUtente(username) == null) {
			return new ServerResponse(1, "Errore durante il caricamento dei video");
		}
		return new ServerResponse(0, videoService.trovaTuttiPerUsernameUtente(username));
	}

	@GetMapping("/getVideo/{id}")
	public ResponseEntity<byte[]> getVideo(@PathVariable String id) {
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

	@PostMapping("/uploadVideo")
	public ServerResponse uploadVideo(@RequestParam("file") MultipartFile file,
			@RequestParam("descrizione") String descrizione, @RequestParam("usernameUtente") String usernameUtente) {
		if(!videoService.trovaPerNome(file.getOriginalFilename()).isEmpty()) {
			return new ServerResponse(1, "Video con nome già esistente");
		}
		ObjectId gridFsId;
		try {
			gridFsId = gridFsTemplate.store(file.getInputStream(), file.getOriginalFilename(), file.getContentType());
			// Crea il documento Immagine
			Video video = new Video();
			video.setNome(file.getOriginalFilename());
			video.setDescrizione(descrizione);
			video.setGridFsId(gridFsId.toHexString());
			video.setTipoMime(file.getContentType());
			video.setDimensione(file.getSize());
			video.setDataCreazione(new Date());
			video.setUsernameUtente(usernameUtente);
			videoService.salvaVideo(video);

			return new ServerResponse(0, video);
		} catch (IOException e) {
			System.err.println("errore nel salvataggio del video");
			e.printStackTrace();
			return new ServerResponse(1, "Errore nel salvataggio del video");
		}
	}

	@DeleteMapping("/cancellaVideo")
	public ServerResponse cancellaVideo(@RequestParam("gridFsId") String gridFsId) {
		try {
			// System.err.println("cancella");
			// Controlla se l'immagine esiste
			Optional<Video> videoOptional = videoService.trovaPerGridFsId(gridFsId);
			if (!videoOptional.isPresent()) {
				return new ServerResponse(1, "Video non trovato");
			}

			// Rimuovi l'immagine dallo storage GridFS
			gridFsTemplate.delete(Query.query(Criteria.where("_id").is(new ObjectId(gridFsId))));

			// Rimuovi il documento dal repository delle immagini
			videoService.cancellaPerId(videoOptional.get().getId()); // Correzione per cancellare l'immagine dal
																		// repository

			return new ServerResponse(0, "Video cancellato con successo");
		} catch (Exception e) {
			System.err.println("Errore nella cancellazione del video");
			e.printStackTrace();
			return new ServerResponse(1, "Errore nella cancellazione del video");
		}
	}

	/********************* MESSAGGI **********************/
	@GetMapping("/ottieniMessaggio")
	public ServerResponse ottieniMessaggi(@RequestParam String username) {
		if (messaggiService.trovaTuttiPerUsernameUtente(username) == null) {
			return new ServerResponse(1, "Errore durante il caricamento dei messaggi");
		}
		return new ServerResponse(0, messaggiService.trovaTuttiPerUsernameUtente(username));
	}

	@GetMapping("/getMessaggio/{nome}")
	public ServerResponse getMessaggio(@PathVariable String nome) {

		if (messaggiService.trovaPerNome(nome).isEmpty()) {
			return new ServerResponse(1, "Messaggio non trovato!");
		}

		return new ServerResponse(0, messaggiService.trovaPerNome(nome).get());
	}

	@PostMapping("/uploadMessaggio")
	public ServerResponse uploadMessaggio(@RequestParam("nome") String nome,
			@RequestParam("descrizione") String descrizione, @RequestParam("url") String url,
			@RequestParam("usernameUtente") String usernameUtente) {
		if (!messaggiService.trovaPerNome(nome + ".txt").isEmpty()) {
			return new ServerResponse(1, "Messaggio con nome già esistente");
		}
		MessaggioTesto msg = new MessaggioTesto();
		msg.setDataCreazione(new Date());
		msg.setDescrizione(descrizione);
		msg.setNome(nome + ".txt");
		msg.setUrl(url);
		msg.setUsernameUtente(usernameUtente);
		messaggiService.salvaMessaggio(msg);
		return new ServerResponse(0, "Messaggio caricato correttamente");
	}

	@DeleteMapping("/cancellaMessaggio/{nome}")
	public ServerResponse cancellaMessaggio(@PathVariable("nome") String nome) {
		try {
			// System.err.println("cancella");
			// Controlla se l'immagine esiste
			Optional<MessaggioTesto> messaggioOptional = messaggiService.trovaPerNome(nome);
			System.err.println(messaggioOptional.get());
			if (!messaggioOptional.isPresent()) {
				return new ServerResponse(1, "Messaggio non trovato");
			}

			// Rimuovi il documento dal repository delle immagini
			messaggiService.cancellaMessaggioPerId(messaggioOptional.get().getId()); // Correzione per cancellare
																						// l'immagine dal repository

			return new ServerResponse(0, "Messaggio cancellata con successo");
		} catch (Exception e) {
			System.err.println("Errore nella cancellazione del messaggio");
			e.printStackTrace();
			return new ServerResponse(1, "Errore nella cancellazione del messaggio");
		}
	}

	/********************* PROGETTI **********************/
	@GetMapping("/ottieniProgetti")
	public ServerResponse ottieniProgetti(@RequestParam String username) {
		if (progettoService.trovaTuttiPerUsernameUtente(username) == null) {
			return new ServerResponse(1, "Errore durante il caricamento dei progetti");
		}
		return new ServerResponse(0, progettoService.trovaTuttiPerUsernameUtente(username));
	}

	@GetMapping("/getProgetto/{id}")
	public ResponseEntity<byte[]> getProgetto(@PathVariable String id) {
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

	@PostMapping("/uploadProgetto")
	public ServerResponse uploadProgetto(@RequestParam("file") MultipartFile file,
			@RequestParam("descrizione") String descrizione, @RequestParam("usernameUtente") String usernameUtente) {
		if (!progettoService.trovaPerNome(file.getOriginalFilename()).isEmpty()) {
			return new ServerResponse(1, "Progetto con nome già esistente");
		}
		ObjectId gridFsId;
		try {
			gridFsId = gridFsTemplate.store(file.getInputStream(), file.getOriginalFilename(), file.getContentType());
			// Crea il documento Immagine
			Progetto progetto = new Progetto();
			progetto.setNome(file.getOriginalFilename());
			progetto.setDescrizione(descrizione);
			progetto.setGridFsId(gridFsId.toHexString());
			progetto.setDimensione(file.getSize());
			progetto.setDataCreazione(new Date());
			progetto.setUsernameUtente(usernameUtente);
			progettoService.salvaProgetto(progetto);

			return new ServerResponse(0, progetto);
		} catch (IOException e) {
			System.err.println("errore nel salvataggio del progetto");
			e.printStackTrace();
			return new ServerResponse(1, "Errore nel salvataggio del progetto");
		}
	}

	@DeleteMapping("/cancellaProgetto")
	public ServerResponse cancellaProgetto(@RequestParam("gridFsId") String gridFsId) {
		try {
			// System.err.println("cancella");
			// Controlla se l'immagine esiste
			Optional<Progetto> progettoOptional = progettoService.trovaPerIdGridFd(gridFsId);
			if (!progettoOptional.isPresent()) {
				return new ServerResponse(1, "Progetto non trovato");
			}

			// Rimuovi l'immagine dallo storage GridFS
			gridFsTemplate.delete(Query.query(Criteria.where("_id").is(new ObjectId(gridFsId))));

			// Rimuovi il documento dal repository delle immagini
			progettoService.cancellaPerId(progettoOptional.get().getId());

			return new ServerResponse(0, "Progetto cancellato con successo");
		} catch (Exception e) {
			System.err.println("Errore nella cancellazione del progetto");
			e.printStackTrace();
			return new ServerResponse(1, "Errore nella cancellazione del progetto");
		}
	}

	/********************* FILE_PERSONALI **********************/
	@PostMapping("/logInAreaPersonale") 
	public ServerResponse logInAreaPersonale(@RequestBody LoginRequest loginRequest) {
		//System.err.println(loginRequest.getUsername());
		//System.err.println(loginRequest.getPassword());
		if(!utenteService.trovaPerUsername(loginRequest.getUsername()).get().getPassword().equals(loginRequest.getPassword())) {
			return new ServerResponse(1, "Password errata");
		}
		return new ServerResponse(0, "Password corretta");
	}
	
	@GetMapping("/ottieniFilePersonali")
	public ServerResponse ottieniFilePersonali(@RequestParam String username) {
		if (filePersonaleService.trovaTuttiPerUsernameUtente(username) == null) {
			return new ServerResponse(1, "Errore durante il caricamento dei file personali");
		}
		return new ServerResponse(0, filePersonaleService.trovaTuttiPerUsernameUtente(username));
	}

	@GetMapping("/getFilePersonale/{nome}")
	public ServerResponse getFilePersonale(@PathVariable String nome) {
		if (filePersonaleService.trovaPerNome(nome).isEmpty()) {
			return new ServerResponse(1, "File personale non trovato!");
		}

		return new ServerResponse(0, filePersonaleService.trovaPerNome(nome).get());
	}
	
	@GetMapping("/getUrlFilePersonale/{id}")
	public ResponseEntity<byte[]> getUrlFilePersonale(@PathVariable String id) {
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

	@DeleteMapping("/cancellaFilePersonale/{nome}")
	public ServerResponse cancellaFilePersonale(@PathVariable String nome) {

		// System.err.println("cancella");
		// Controlla se l'immagine esiste
		Optional<FilePersonale> filePersonaleOptional = filePersonaleService.trovaPerNome(nome);
		if (!filePersonaleOptional.isPresent()) {
			return new ServerResponse(1, "File personale non trovato");
		}

		filePersonaleService.cancellaPerId(filePersonaleOptional.get().getId());
		return new ServerResponse(0, "File personale cancellato con successo");
	}
}
