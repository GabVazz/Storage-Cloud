import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _authProvider: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(loginForm: any) {
    if (this.loginForm.valid) {
      this._authProvider.login(loginForm.username, loginForm.password);
    } else {
      // Mostrare errori di validazione
      console.log('Form is invalid');
    }
  }
}
