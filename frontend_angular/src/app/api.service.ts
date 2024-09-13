import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from './toast.service';
import { Utente } from './model/utente.model';
import { ServerResponse } from './model/server-response.model';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private basePath = "http://localhost:8081/api";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true
  };

  constructor(private _http: HttpClient, private _router: Router, private toastService: ToastService) { }

  registrazione(utente: Utente) {
    this._http.post<ServerResponse>(`${this.basePath}/registrazione`, utente, this.httpOptions).subscribe({
      next: v => {
        if (v.code !== 0) {
          this.toastService.showError(v.message);
          console.log("Errore durante la registrazione");
        } else {
          this.toastService.showSuccess(v.message);
          console.log("Registrazione riuscita!");
          this._router.navigate(['login'])
        }
      },
      error: err => this.toastService.showError(err.message)
    })
  }

  /************************************ IMMAGINI *********************************/

  ottieniImmagini(username: string): Observable<any> {
    return this._http.get(`${this.basePath}/ottieniImmagini`, {
      params: { username: username },
      ...this.httpOptions
    }).pipe(
      catchError((err) => {
        this.toastService.showError("Errore interno del server\n" + err.message);
        return of([]);
      })
    );
  }

  getImmagineUrl(gridFsId: string): string {
    return `${this.basePath}/getImmagine/${gridFsId}`;
  }

  uploadImmagine(file: File, descrizione: string, username: string): Observable<ServerResponse> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('descrizione', descrizione);
    formData.append('usernameUtente', username);

    //per avere una multipart request, bisogna togliere le http option, in altre parole fa si che non lanci eccezioni
    return this._http.post<ServerResponse>(`${this.basePath}/uploadImmagine`, formData).pipe(
      catchError((err) => {
        this.toastService.showError("Errore durante l'upload\n" + err.message);
        return of({ code: 1, message: 'Errore durante l\'upload' });
      })
    );
  }

  cancellaImmagine(gridFsId: string): Observable<any> {
    return this._http.delete<ServerResponse>(`${this.basePath}/cancellaImmagine`, {
      params: { gridFsId: gridFsId },
      ...this.httpOptions
    }).pipe(
      catchError((err) => {
        this.toastService.showError("Errore durante la cancellazione dell'immagine\n" + err.message);
        return of({ code: 1, message: 'Errore durante la cancellazione dell\'immagine' });
      })
    );
  }

  /************************************ VIDEO *********************************/
  ottieniVideo(username: string): Observable<any> {
    return this._http.get(`${this.basePath}/ottieniVideo`, {
      params: { username: username },
      ...this.httpOptions
    }).pipe(
      catchError((err) => {
        this.toastService.showError("Errore interno del server\n" + err.message);
        return of([]);
      })
    );
  }

  uploadVideo(file: File, descrizione: string, username: string): Observable<ServerResponse> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('descrizione', descrizione);
    formData.append('usernameUtente', username);

    //per avere una multipart request, bisogna togliere le http option, in altre parole fa si che non lanci eccezioni
    return this._http.post<ServerResponse>(`${this.basePath}/uploadVideo`, formData).pipe(
      catchError((err) => {
        this.toastService.showError("Errore durante l'upload\n" + err.message);
        return of({ code: 1, message: 'Errore durante l\'upload' });
      })
    );
  }

  getVideoUrl(gridFsId: string): string {
    return `${this.basePath}/getVideo/${gridFsId}`;
  }

  cancellaVideo(gridFsId: string): Observable<any> {
    return this._http.delete<ServerResponse>(`${this.basePath}/cancellaVideo`, {
      params: { gridFsId: gridFsId },
      ...this.httpOptions
    }).pipe(
      catchError((err) => {
        this.toastService.showError("Errore durante la cancellazione dell video\n" + err.message);
        return of({ code: 1, message: 'Errore durante la cancellazione dell video' });
      })
    );
  }

  /************************************ MESSAGGIO *********************************/
  ottieniMessaggi(username: string): Observable<any> {
    return this._http.get(`${this.basePath}/ottieniMessaggio`, {
      params: { username: username },
      ...this.httpOptions
    }).pipe(
      catchError((err) => {
        this.toastService.showError("Errore interno del server\n" + err.message);
        return of([]);
      })
    );
  }

  uploadMessaggio(nome: string, descrizione: string, url: string, username: string): Observable<ServerResponse> {
    const formData: FormData = new FormData();
    formData.append('nome', nome);
    formData.append('descrizione', descrizione);
    formData.append('url', url);
    formData.append('usernameUtente', username);

    //per avere una multipart request, bisogna togliere le http option, in altre parole fa si che non lanci eccezioni
    return this._http.post<ServerResponse>(`${this.basePath}/uploadMessaggio`, formData).pipe(
      catchError((err) => {
        this.toastService.showError("Errore durante l'upload\n" + err.message);
        return of({ code: 1, message: 'Errore durante l\'upload' });
      })
    );
  }

  getMessaggio(nome: string): string {
    return `${this.basePath}/getMessaggio/${nome}`;
  }

  cancellaMessaggio(nome: string): Observable<any> {
    return this._http.delete<ServerResponse>(`${this.basePath}/cancellaMessaggio/${nome}`, this.httpOptions)
      .pipe(
        catchError((err) => {
          this.toastService.showError("Errore durante la cancellazione del messaggio\n" + err.message);
          return of({ code: 1, message: 'Errore durante la cancellazione del messaggio' });
        })
      );
  }

  /************************************ PROGETTO *********************************/
  ottieniProgetto(username: string): Observable<any> {
    return this._http.get(`${this.basePath}/ottieniProgetti`, {
      params: { username: username },
      ...this.httpOptions
    }).pipe(
      catchError((err) => {
        this.toastService.showError("Errore interno del server\n" + err.message);
        return of([]);
      })
    );
  }

  uploadProgetto(file: File, descrizione: string, username: string): Observable<ServerResponse> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('descrizione', descrizione);
    formData.append('usernameUtente', username);

    //per avere una multipart request, bisogna togliere le http option, in altre parole fa si che non lanci eccezioni
    return this._http.post<ServerResponse>(`${this.basePath}/uploadProgetto`, formData).pipe(
      catchError((err) => {
        this.toastService.showError("Errore durante l'upload\n" + err.message);
        return of({ code: 1, message: 'Errore durante l\'upload' });
      })
    );
  }

  getProgetto(nome: string): string {
    return `${this.basePath}/getProgetto/${nome}`;
  }

  cancellaProgetto(gridFsId: string): Observable<any> {
    return this._http.delete<ServerResponse>(`${this.basePath}/cancellaProgetto`, {
      params: { gridFsId: gridFsId },
      ...this.httpOptions
    }).pipe(
      catchError((err) => {
        this.toastService.showError("Errore durante la cancellazione del messaggio\n" + err.message);
        return of({ code: 1, message: 'Errore durante la cancellazione del messaggio' });
      })
    );
  }

  /************************************ FILE_PERSONALE *********************************/
  ottieniFilePersonali(username: string): Observable<any> {
    return this._http.get(`${this.basePath}/ottieniFilePersonali`, {
      params: { username: username },
      ...this.httpOptions
    }).pipe(
      catchError((err) => {
        this.toastService.showError("Errore interno del server\n" + err.message);
        return of([]);
      })
    );
  }

  uploadFilePersonale(file: File | null, descrizione: string, url: string, tipoContenuto: string, nome: string | null, username: string): Observable<ServerResponse> {
    const formData: FormData = new FormData();
    if (file) {
      formData.append('file', file);
    }
    if (nome) {
      formData.append('nome', nome);
    }
    formData.append('descrizione', descrizione);
    formData.append('url', url);
    formData.append('usernameUtente', username);
    formData.append('tipoContenuto', tipoContenuto);
    return this._http.post<ServerResponse>(`${this.basePath}/uploadFilePersonale`, formData).pipe(
      catchError((err) => {
        this.toastService.showError("Errore durante l'upload\n" + err.message);
        return of({ code: 1, message: 'Errore durante l\'upload' });
      })
    );
  }


  getFilePersonale(nome: string): string {
    return `${this.basePath}/getFilePersonale/${nome}`;
  }

  getUrlFilePersonale(gridFsId: string): string {
    return `${this.basePath}/getUrlFilePersonale/${gridFsId}`;
  }

  cancellaFilePersonale(nome: string): Observable<any> {
    return this._http.delete<ServerResponse>(`${this.basePath}/cancellaFilePersonale/${nome}`, this.httpOptions)
      .pipe(
        catchError((err) => {
          this.toastService.showError("Errore durante la cancellazione del contenuto personale\n" + err.message);
          return of({ code: 1, message: 'Errore durante la cancellazione del contenuto personale' });
        })
      );
  }
}
