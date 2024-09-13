import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../api.service';
import { AuthService } from '../../auth.service';
import { ToastService } from '../../toast.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-messaggi',
  templateUrl: './messaggi.component.html',
  styleUrl: './messaggi.component.css'
})
export class MessaggiComponent implements OnInit {

  nome: string = '';
  descrizione: string = '';
  url: string = '';
  messaggi: any[] = [];
  visible: boolean = false;
  searchValue: string | undefined;

  @ViewChild('msgs') table!: Table;

  constructor(private _apiService: ApiService, private _authProvider: AuthService, private _toastService: ToastService) { }


  ngOnInit(): void {
    this._apiService.ottieniMessaggi(this._authProvider.getUsername()).subscribe((response: any) => {
      if (response.code === 0 && Array.isArray(response.message)) {
        this.messaggi = response.message; // Estrai l'array di immagini da response.message
      } else {
        this.messaggi = [];
        console.error('Errore durante il caricamento delle immagini o dati non validi');
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
    this.nome = '';
    this.descrizione = '';
    this.url = '';
  }

  deleteMessaggio(messaggio: any): void {
    this._apiService.cancellaMessaggio(messaggio.nome).subscribe({
      next: (response: any) => {
        if (response.code === 0) {
          this.messaggi = this.messaggi.filter((msg: any) => msg.nome !== messaggio.nome);
          this._toastService.showSuccess('Messaggio cancellato con successo');
        }
      }
    });
  }

  onUpload() {
    if (this.nome && this.descrizione) {
      this._apiService.uploadMessaggio(this.nome, this.descrizione, this.url, this._authProvider.getUsername()).subscribe({
        next: (response: any) => {
          if (response.code === 0) {
            // Aggiungi l'immagine appena caricata alla lista immagini
            const nuovaImmagine = {
              nome: this.nome,
              descrizione: this.descrizione,
              url: this.url,
              dataCreazione: new Date().toISOString() // Usa la data corrente
            };
            this.messaggi.push(nuovaImmagine);
            this.hideDialog();
            this._toastService.showSuccess("Upload messaggio effettuato correttamente!");

            this.table.totalRecords = this.messaggi.length;
            const rows = this.table?.rows ?? 0;
            const totalRows = Math.floor(this.messaggi.length / rows) * rows;
            this.table.first = totalRows;
          } else {
            this._toastService.showError(response.message);
            console.error('Errore durante l\'upload del messaggio');
            this.clearForm();
          }
        }
      });
    }
  }

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


  clear(table: Table) {
    table.clear(); // Rimuove tutti i filtri attivi nella tabella
    this.searchValue = ''; // Resetta il valore della barra di ricerca

    // Resetta i filtri delle singole colonne
    table.filters = {};
    table.filterGlobal(this.searchValue, 'contains'); // Reimposta il filtro globale
  }
}
