import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

// Pattern per la password
const passwordPattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#&%^$?!=])[a-zA-Z0-9@#&%^$?!=]{8,}$";

// Pattern per l'email
const emailPattern = "^[\\w.%+-]+@[a-zA-Z0-9.-]+\\.(com|it|net|org)$";

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(passwordPattern)
      ]),
      nome: ['', Validators.required],
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(emailPattern)
      ])
    });
  }

  onSubmit(registerForm: any) {
    if (this.registerForm.valid) {
      this.apiService.registrazione({
        username: registerForm.username,
        password: registerForm.password,
        nome: registerForm.nome,
        email: registerForm.email,
        id: ''
      });
      this.registerForm.reset();
    }
  }
}
