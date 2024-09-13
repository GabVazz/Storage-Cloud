import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServerResponse } from './model/server-response.model';
import { Router } from '@angular/router';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private basePath = "http://localhost:8081/api";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };

  private readonly USER_SESSION_KEY = 'isLoggedIn';
  private readonly USER_AREA_PERSONALE_SESSION_KEY = 'isLoggedInAreaPersonale';

  constructor(private _http: HttpClient, private _router: Router, private toastService: ToastService) { }

  // Metodo per il login
  login(username: string, password: string) {
    this._http.post<ServerResponse>(`${this.basePath}/login`, {
      username: username,
      password: password
    }, this.httpOptions).subscribe({
      next: v => {
        if (v.code !== 0) {
          this.toastService.showError(v.message);
          console.log("Errore durante il login");
        } else {
          this.toastService.showSuccess(v.message);
          console.log("Login riuscito!");
          sessionStorage.setItem(this.USER_SESSION_KEY, 'true');
          sessionStorage.setItem('username', username);
          this._router.navigate(['/visualizzaFile']);
        }
      },
      error: err => this.toastService.showError(err.message)
    })
  }

  logInAreaPersonale(username: string, password: string) {
    this._http.post<ServerResponse>(`${this.basePath}/logInAreaPersonale`, {
      username: username,
      password: password
    }, this.httpOptions).subscribe({
      next: v => {
        if (v.code !== 0) {
          this.toastService.showError(v.message);
          console.log("Errore durante la conferma password");
        } else {
          this.toastService.showSuccess(v.message);
          console.log("Passowrd corretta!");
          sessionStorage.setItem(this.USER_AREA_PERSONALE_SESSION_KEY, 'true');
        }
      },
      error: err => this.toastService.showError(err.message)
    })
  }

  // Metodo per verificare lo stato di login
  getUsername(): string {
    return sessionStorage.getItem('username') || '';
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem(this.USER_SESSION_KEY) === 'true';
  }

  isLoggedInAreaPersonale(): boolean {
    return sessionStorage.getItem(this.USER_AREA_PERSONALE_SESSION_KEY) === 'true';
  }

  // Metodo per logout
  logout(): void {
    sessionStorage.removeItem(this.USER_SESSION_KEY);
    sessionStorage.removeItem(this.USER_AREA_PERSONALE_SESSION_KEY);
    sessionStorage.removeItem('username');
    if (this._router.url === '') {
      window.location.reload();
    } else {
      this._router.navigate(['']);
    }
  }
}
