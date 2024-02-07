import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [MatButtonModule],
})
export class LoginComponent {
  constructor(private routes: Router) {}

  email: string = '';
  password: string = '';

  onEmailChange(event: any) {
    this.email = event.target.value;
  }

  onPasswordChange(event: any) {
    this.password = event.target.value;
  }
  userLogin() {
    if (this.email === 'mr@gmail.com' && this.password === 'mr1') {
      console.log('successfully loggedIn');
      this.routes.navigate(['home']);
    } else {
      console.log('loogIn failed');
    }
  }
}
