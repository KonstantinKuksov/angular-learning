import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  adminLogin = 'admin';
  adminPassword = '1234';

  login = '';
  password = '';

  isAuthenticated = false;
  showError = false;

  constructor(private router: Router) {}

  checkAdmin() {
    this.isAuthenticated =
      this.adminLogin === this.login && this.adminPassword === this.password;
    if (this.isAuthenticated) {
      this.showError = false;
      this.login = '';
      this.password = '';
      this.router.navigate(['/']);
    } else {
      this.showError = true;
    }
  }

  logout() {
    this.isAuthenticated = false;
  }
}
