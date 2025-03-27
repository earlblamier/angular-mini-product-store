/* import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true, // latest Angular version
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onSignOut(): void {
    this.authService.logout(); // Call logout method
    this.router.navigate(['/login']); // Redirect to login page
  }
}
 */



import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs'; // Import Observable

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated$!: Observable<boolean>; // Declare without initializing

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Initialize isAuthenticated$ here
    this.isAuthenticated$ = this.authService.isLoggedIn$;
  }

  onSignOut(): void {
    this.authService.logout(); // Call logout method
  }
}