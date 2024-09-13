import { Component, OnInit, resolveForwardRef, ViewChild } from '@angular/core';
import { ApiService } from '../../api.service';
import { AuthService } from '../../auth.service';
import { ToastService } from '../../toast.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-immagini',
  templateUrl: './immagini.component.html',
  styleUrls: ['./immagini.component.css']
})
export class ImmaginiComponent implements OnInit {
  selectedFile: File | null = null;
  descrizione: string = '';
  immagini: any[] = [];
  visible: boolean = false;
  searchValue: string | undefined;
  fullPreviewVisible: boolean = false;
  selectedImageUrl: string | null = null;

  @ViewChild('imgs') table!: Table;

  constructor(private _apiService: ApiService, private _authProvider: AuthService, private _toastService: ToastService) { }

  onFileSelected(event: any) {
    const file = event.target.files[0];

    // Verifica se il file è un'immagine JPEG o PNG
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
        this.selectedFile = file;
    } else {
        // Resetta il file selezionato e mostra un messaggio di errore
        this.selectedFile = null;
        this._toastService.showError('Solo file JPEG o PNG sono accettati.');
    }
}

  onUpload() {
    if (this.selectedFile && this.descrizione) {
      this._apiService.uploadImmagine(this.selectedFile, this.descrizione, this._authProvider.getUsername()).subscribe({
        next: (response: any) => {
          if (response.code === 0) {
            // Aggiungi l'immagine appena caricata alla lista immagini
            const nuovaImmagine = {
              nome: this.selectedFile?.name,
              descrizione: this.descrizione,
              gridFsId: response.message.gridFsId, // Assumi che il server restituisca l'ID dell'immagine caricata
              tipoMime: this.selectedFile?.type,
              dimensione: this.selectedFile?.size,
              dataCreazione: new Date().toISOString() // Usa la data corrente
            };
            this.immagini.push(nuovaImmagine);
            this.hideDialog();
            this._toastService.showSuccess("Upload immagine effettuato correttamente!");

            this.table.totalRecords = this.immagini.length;
            const rows = this.table?.rows ?? 0;
            const totalRows = Math.floor(this.immagini.length / rows) * rows;
            this.table.first = totalRows;
          } else {
            console.error('Errore durante l\'upload dell\'immagine');
            this._toastService.showError(response.message);
            this.clearForm();
          }
        }
      });
    }
  }

  // Funzione per aprire l'immagine ingrandita
  toggleFullPreview(immagine: any) {
    this.selectedImageUrl = this.getImmagineUrl(immagine.gridFsId);
    //console.log(immagine.gridFsId);
    this.fullPreviewVisible = true;
  }

  // Funzione per chiudere l'immagine ingrandita
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
  }

  getImmagineUrl(gridFsId: string): string {
    return this._apiService.getImmagineUrl(gridFsId);
  }

  // Funzione per scaricare l'immagine
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

  deleteImage(immagine: any): void {
    this._apiService.cancellaImmagine(immagine.gridFsId).subscribe({
      next: (response: any) => {
        if (response.code === 0) {
          this.immagini = this.immagini.filter((img: any) => img.gridFsId !== immagine.gridFsId);
          this._toastService.showSuccess('Immagine cancellata con successo');
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

  ngOnInit() {
    this._apiService.ottieniImmagini(this._authProvider.getUsername()).subscribe((response: any) => {
      if (response.code === 0 && Array.isArray(response.message)) {
        this.immagini = response.message; // Estrai l'array di immagini da response.message
      } else {
        this.immagini = [];
        console.error('Errore durante il caricamento delle immagini o dati non validi');
      }
    });
  }
}
