import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ApiService } from '../../api.service';
import { AuthService } from '../../auth.service';
import { ToastService } from '../../toast.service';

@Component({
  selector: 'app-progetti',
  templateUrl: './progetti.component.html',
  styleUrl: './progetti.component.css'
})
export class ProgettiComponent {
  selectedFile: File | null = null;
  descrizione: string = '';
  progetti: any[] = [];
  visible: boolean = false;
  searchValue: string | undefined;

  @ViewChild('progs') table!: Table;

  constructor(private _apiService: ApiService, private _authProvider: AuthService, private _toastService: ToastService) { }

  onFileSelected(event: any) {
    const file = event.target.files[0];

    // Verifica se il file è uno dei formati compressi supportati
    const validFileTypes = [
      'application/zip',
      'application/x-zip-compressed', // Tipo MIME alternativo per ZIP
      'application/x-rar-compressed',
      'application/x-7z-compressed',
      'application/x-tar',
      'application/gzip',
      'application/octet-stream' // Tipo MIME generico spesso usato per file binari
    ];

    // Controlla anche l'estensione del file come fallback
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

  onUpload() {
    if (this.selectedFile && this.descrizione) {
      this._apiService.uploadProgetto(this.selectedFile, this.descrizione, this._authProvider.getUsername()).subscribe({
        next: (response: any) => {
          if (response.code === 0) {
            // Aggiungi l'progetto appena caricata alla lista progetti
            const nuovoProgetto = {
              nome: this.selectedFile?.name,
              descrizione: this.descrizione,
              gridFsId: response.message.gridFsId, // Assumi che il server restituisca l'ID dell'progetto caricata
              tipoMime: this.selectedFile?.type,
              dimensione: this.selectedFile?.size,
              dataCreazione: new Date().toISOString() // Usa la data corrente
            };
            this.progetti.push(nuovoProgetto);
            this.hideDialog();
            this._toastService.showSuccess("Upload progetto effettuato correttamente!");

            this.table.totalRecords = this.progetti.length;
            const rows = this.table?.rows ?? 0;
            const totalRows = Math.floor(this.progetti.length / rows) * rows;
            this.table.first = totalRows;
          } else {
            console.error('Errore durante l\'upload del progetto');
            this._toastService.showError(response.message);
            this.clearForm();
          }
        }
      });
    }
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

  getProgetto(gridFsId: string): string {
    return this._apiService.getProgetto(gridFsId);
  }

  // Funzione per scaricare l'progetto
  downloadProgetto(progetto: any): void {
    const imageUrl = this.getProgetto(progetto.gridFsId);

    // Fetch the image and convert it to a blob
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = progetto.nome;  // Nome del file che verrà scaricato
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Errore nel download del progetto:', error));
  }

  deleteProgetto(progetto: any): void {
    this._apiService.cancellaProgetto(progetto.gridFsId).subscribe({
      next: (response: any) => {
        if (response.code === 0) {
          this.progetti = this.progetti.filter((prog: any) => prog.gridFsId !== progetto.gridFsId);
          this._toastService.showSuccess('Progetto cancellato con successo');
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
    this._apiService.ottieniProgetto(this._authProvider.getUsername()).subscribe((response: any) => {
      if (response.code === 0 && Array.isArray(response.message)) {
        this.progetti = response.message; // Estrai l'array di progetti da response.message
      } else {
        this.progetti = [];
        console.error('Errore durante il caricamento delle progetti o dati non validi');
      }
    });
  }

}
