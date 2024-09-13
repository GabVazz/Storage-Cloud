import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visualizza-file',
  templateUrl: './visualizza-file.component.html',
  styleUrl: './visualizza-file.component.css'
})
export class VisualizzaFileComponent implements OnInit{
  stateOptions: any[] = [
    { label: 'Immagini', value: 'immagini' },
    { label: 'Video', value: 'video' },
    { label: 'Messaggi di testo/links', value: 'messaggi' },
    { label: 'Progetti', value: 'progetti' },
    { label: 'Area Personale', value: 'areaPersonale' }
  ];

  value: string = 'immagini';
  passwordDialogVisible: boolean = false;
  passwordForm: FormGroup;

  constructor( private fb: FormBuilder, private _apiService: ApiService, private _authProvider: AuthService, private _router: Router) {
    // Inizializza il form della password
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required]]
    });
  }

  onOptionChange(selectedValue: string) {
    console.log(selectedValue)
    if (selectedValue === 'areaPersonale' && this._authProvider.isLoggedInAreaPersonale() === false) {
      this.passwordDialogVisible = true;
    }
  }

  onCancel() {
    this.passwordDialogVisible = false;
    this.passwordForm.reset();
  }

  ngOnInit() {
    if(this._authProvider.isLoggedIn() === false) {
      this._router.navigate(['/login']);
    }
    
    // Mostra il modal della password se viene selezionata l'area personale
    this.passwordDialogVisible = this.value === 'areaPersonale';
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      const username = this._authProvider.getUsername();
      this._authProvider.logInAreaPersonale( username, this.passwordForm.get('password')?.value);
      this.onCancel();
    }
  }

  isLoggedInAreaPersonale() {
    return this._authProvider.isLoggedInAreaPersonale();
  }
}
