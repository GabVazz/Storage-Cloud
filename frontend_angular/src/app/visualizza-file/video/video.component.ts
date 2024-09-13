import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ApiService } from '../../api.service';
import { AuthService } from '../../auth.service';
import { ToastService } from '../../toast.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent implements OnInit{
  selectedFile: File | null = null;
  descrizione: string = '';
  video: any[] = [];
  visible: boolean = false;
  searchValue: string | undefined;

  @ViewChild('vids') table!: Table;

  constructor(private _apiService: ApiService, private _authProvider: AuthService, private _toastService: ToastService) {}

  ngOnInit() {
    this._apiService.ottieniVideo(this._authProvider.getUsername()).subscribe((response: any) => {
      if (response.code === 0 && Array.isArray(response.message)) {
        this.video = response.message; // Estrai l'array di video da response.message
      } else {
        this.video = [];
        console.error('Errore durante il caricamento dei video o dati non validi');
      }
    });
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
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];

    // Verifica se il file è un'immagine JPEG o PNG
    if (file && file.type === 'video/mp4') {
        this.selectedFile = file;
    } else {
        // Resetta il file selezionato e mostra un messaggio di errore
        this.selectedFile = null;
        this._toastService.showError('Solo file MP4 sono accettati.');
    }
  }

  onUpload() {
    if (this.selectedFile && this.descrizione) {
      this._apiService.uploadVideo(this.selectedFile, this.descrizione, this._authProvider.getUsername()).subscribe({
        next: (response: any) => {
          if (response.code === 0) {
            // Aggiungi l'immagine appena caricata alla lista immagini
            const nuovoVideo = {
              nome: this.selectedFile?.name,
              descrizione: this.descrizione,
              gridFsId: response.message.gridFsId, // Assumi che il server restituisca l'ID dell'immagine caricata
              tipoMime: this.selectedFile?.type,
              dimensione: this.selectedFile?.size,
              dataCreazione: new Date().toISOString() // Usa la data corrente
            };
            this.video.push(nuovoVideo);
            this.hideDialog();
            this._toastService.showSuccess("Upload video effettuato correttamente!");

            //aggiorno il paginator nelle pagine seguenti
            this.table.totalRecords = this.video.length;
            const rows = this.table?.rows ?? 0;
            const totalRows = Math.floor(this.video.length / rows) * rows;
            this.table.first = totalRows;
          } else {
            console.error('Errore durante l\'upload del video');
            this._toastService.showError(response.message);
            this.clearForm();
          }
        }
      });
    }
  }

  getVideoUrl(gridFsId: string): string {
    return this._apiService.getVideoUrl(gridFsId);
  }

  // Funzione per scaricare l'immagine
  downloadVideo(video: any): void {
    const imageUrl = this.getVideoUrl(video.gridFsId);

    // Fetch the image and convert it to a blob
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = video.nome;  // Nome del file che verrà scaricato
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Errore nel download del video:', error));
  }

  deleteVideo(video: any): void {
    this._apiService.cancellaVideo(video.gridFsId).subscribe({
      next: (response: any) => {
        if (response.code === 0) {
          this.video = this.video.filter((vid: any) => vid.gridFsId !== video.gridFsId);
          this._toastService.showSuccess('Video cancellato con successo');
        }
      }
    });
}

  clear(table: Table) {
    table.clear(); // Rimuove tutti i filtri attivi nella tabella
    this.searchValue = ''; // Resetta il valore della barra di ricerca
  
    // Resetta i filtri delle singole colonne
    table.filters = {};
    table.filterGlobal(this.searchValue, 'contains'); // Reimposta il filtro globale
  }
}
