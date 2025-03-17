import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // Add login logic here

  onLogin() {
    // Handle login logic, e.g., setting a session, redirecting, etc.
    console.log('User logged in!');
  }
}
