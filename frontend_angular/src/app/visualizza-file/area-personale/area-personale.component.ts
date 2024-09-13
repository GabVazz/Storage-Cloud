import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../api.service';
import { AuthService } from '../../auth.service';
import { ToastService } from '../../toast.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-area-personale',
  templateUrl: './area-personale.component.html',
  styleUrl: './area-personale.component.css'
})
export class AreaPersonaleComponent implements OnInit {
  visible: boolean = false;
  searchValue: string = '';
  selectedType: string = '';
  selectedFile: File | null = null;
  descrizione: string = '';
  nome: string = '';
  url: string = '';
  contenuti: any[] = [];
  fullPreviewVisible: boolean = false;
  selectedImageUrl: string | null = null;

  @ViewChild('contents') table !: Table;
  constructor(private _apiService: ApiService, private _authProvider: AuthService, private _toastService: ToastService) { }

  ngOnInit(): void {
    this._apiService.ottieniFilePersonali(this._authProvider.getUsername()).subscribe((response: any) => {
      if (response.code === 0 && Array.isArray(response.message)) {
        this.contenuti = response.message;
      } else {
        this.contenuti = [];
        console.error('Errore durante il caricamento dei contenuti o dati non validi');
      }
    });
  }


  // Opzioni per il dropdown
  contentTypes = [
    { label: 'Immagine', value: 'immagine' },
    { label: 'Video', value: 'video' },
    { label: 'Progetto', value: 'progetto' },
    { label: 'Messaggio di Testo', value: 'testo' }
  ];

  toggleFullPreview(immagine: any) {
    this.selectedImageUrl = this.getFileUrl(immagine.gridFsId);
    this.fullPreviewVisible = true;
  }

  closeFullPreview() {
    this.fullPreviewVisible = false;
    this.selectedImageUrl = null;
  }

  showDialog() {
    this.visible = true;
  }

  hideDialog() {
    this.visible = false;
    this.clearForm();
  }

  clearForm() {
    this.selectedFile = null;
    this.descrizione = '';
    this.nome = '';
    this.url = '';
    this.selectedType = '';
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];

    const validFileTypes = [
      'application/zip',
      'application/x-zip-compressed', // Tipo MIME alternativo per ZIP
      'application/x-rar-compressed',
      'application/x-7z-compressed',
      'application/x-tar',
      'application/gzip',
      'application/octet-stream' // Tipo MIME generico spesso usato per file binari
    ];

    if (this.selectedType === 'immagine') {
      if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
        this.selectedFile = file;
      } else {
        // Resetta il file selezionato e mostra un messaggio di errore
        this.selectedFile = null;
        this._toastService.showError('Solo file JPEG o PNG sono accettati.');
      }
    }

    if (this.selectedType === 'video') {
      if (file && file.type === 'video/mp4') {
        this.selectedFile = file;
      } else {
        // Resetta il file selezionato e mostra un messaggio di errore
        this.selectedFile = null;
        this._toastService.showError('Solo file MP4 sono accettati.');
      }
    }

    if (this.selectedType === 'progetto') {
      const validExtensions = ['zip', 'rar', '7z', 'tar', 'gz'];
      const fileExtension = file.name.split('.').pop().toLowerCase();
      if (file && (validFileTypes.includes(file.type) || validExtensions.includes(fileExtension))) {
        this.selectedFile = file;
      } else {
        // Resetta il file selezionato e mostra un messaggio di errore
        this.selectedFile = null;
        this._toastService.showError('Solo file compressi ZIP, RAR, 7Z, TAR, o GZIP sono accettati.');
      }
    }

    if (this.selectedType === 'testo') {
      this.selectedFile = file;
    }
  }

  isMedia() {
    return this.selectedType === 'immagine' || this.selectedType === 'video' || this.selectedType === 'progetto';
  }

  canSubmit() {
    if (this.selectedType === 'testo') {
      return this.nome && this.descrizione;
    }
    return this.selectedFile && this.descrizione;
  }

  onUpload() {
    if (this.selectedType === 'testo') {
      this._apiService.uploadFilePersonale(null, this.descrizione, this.url, this.selectedType, this.nome, this._authProvider.getUsername())
        .subscribe({
          next: (response: any) => {
            if (response.code === 0) {
              const nuovoContenuto = {
                nome: this.nome.endsWith('.txt') ? this.nome : `${this.nome}.txt`,  // Assicura l'estensione .txt
                descrizione: this.descrizione,
                tipoFile: 'text/plain',
                dimensione: this.descrizione.length, // Approssimazione
                dataCreazione: new Date().toISOString()
              };
              this.contenuti.push(nuovoContenuto);
              this._toastService.showSuccess("Contenuto di testo caricato con successo!");
              this.hideDialog();
              this.updateTable();
            } else {
              this._toastService.showError("Errore durante il caricamento del contenuto di testo");
              this.hideDialog();
              this.updateTable();
            }
          }
        });
    }
    else {
      this._apiService.uploadFilePersonale(this.selectedFile, this.descrizione, '', this.selectedType, null, this._authProvider.getUsername())
        .subscribe({
          next: (response: any) => {
            if (response.code === 0) {
              const nuovoContenuto = {
                nome: this.selectedFile?.name,
                descrizione: this.descrizione,
                gridFsId: response.message.gridFsId,
                tipoFile: this.selectedFile?.type,
                dimensione: this.selectedFile?.size,
                dataCreazione: new Date().toISOString()
              };
              this.contenuti.push(nuovoContenuto);
              this.hideDialog();
              this.updateTable();
              this._toastService.showSuccess("Upload file effettuato correttamente!");
            } else {
              this.hideDialog();
              this.updateTable();
              this._toastService.showError("Errore durante il caricamento del file");
            }
          }
        });
    }
  }

  getContenuto(nome: string): string {
    return this._apiService.getFilePersonale(nome);
  }

  getFileUrl(gridFsId: string): string {
    return this._apiService.getUrlFilePersonale(gridFsId);
  }

  deleteContenuto(contenuto: any): void {
    this._apiService.cancellaFilePersonale(contenuto.nome).subscribe({
      next: (response: any) => {
        if (response.code === 0) {
          this.contenuti = this.contenuti.filter((cont: any) => cont.nome !== contenuto.nome);
          this._toastService.showSuccess('Contenuto cancellato con successo');
        }
      }
    });
  }

  // Funzione per scaricare l'immagine
  downloadContenuto(contenuto: any): void {
    // Controlla se il tipo di file è text/plain o se il nome del file ha estensione .txt
    if (contenuto.nome.endsWith('.txt')) {
      // Crea un Blob con solo la descrizione del messaggio
      const textBlob = new Blob([contenuto.descrizione], { type: 'text/plain' });
      const url = window.URL.createObjectURL(textBlob);

      // Crea un link temporaneo per avviare il download
      const link = document.createElement('a');
      link.href = url;
      link.download = contenuto.nome;

      // Aggiungi il link al DOM, cliccalo per avviare il download, e poi rimuovilo
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Rilascia l'URL temporaneo
      window.URL.revokeObjectURL(url);
    } else {
      // Per altri tipi di file, utilizza il metodo fetch per il download
      const fileUrl = this.getFileUrl(contenuto.gridFsId);

      fetch(fileUrl)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = contenuto.nome;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Errore nel download del contenuto:', error));
    }
  }

  updateTable() {
    this.table.totalRecords = this.contenuti.length;
    const rows = this.table?.rows ?? 0;
    const totalRows = Math.floor(this.contenuti.length / rows) * rows;
    this.table.first = totalRows;
    //this.table.reset();  // Forza un ricalcolo della tabella
  }

  clear(table: Table) {
    table.clear(); // Rimuove tutti i filtri attivi nella tabella
    this.searchValue = ''; // Resetta il valore della barra di ricerca

    // Resetta i filtri delle singole colonne
    table.filters = {};
    table.filterGlobal(this.searchValue, 'contains'); // Reimposta il filtro globale
  }
}
