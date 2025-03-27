/* import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent],
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-header></app-header>
    
    <router-outlet />
    <app-footer></app-footer>



    `,
})
export class AppComponent implements OnInit {
  title = 'mini-product-store';
  isAuthenticated = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    // Log when navigation occurs
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log('Navigated to:', event.urlAfterRedirects);
    });

    // Subscribe to authentication status
    this.authService.isAuthenticatedUser.subscribe((status: boolean) => {
      this.isAuthenticated = status;
    });
  }

  logout() {
    this.authService.logout();
    console.log('Logout clicked');
  }
}
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter, Subscription, Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent],
  styleUrls: ['./app.component.scss'],
  template: `
    <app-header></app-header>
    
    <router-outlet></router-outlet>
    
    <app-footer></app-footer>
  `,
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mini-product-store';
  isAuthenticated$!: Observable<boolean>; // Declare without initializing
  private authStatusSubscription: Subscription | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    // Initialize isAuthenticated$ here
    this.isAuthenticated$ = this.authService.isLoggedIn$;

    // Log when navigation occurs
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log('Navigated to:', event.urlAfterRedirects);
    });

    // Subscribe to authentication status
    this.authStatusSubscription = this.isAuthenticated$.subscribe((status: boolean) => {
      console.log('Authentication status:', status);
    });
  }

  ngOnDestroy() {
    // Unsubscribe from the authentication status observable to prevent memory leaks
    if (this.authStatusSubscription) {
      this.authStatusSubscription.unsubscribe();
    }
  }

  logout() {
    this.authService.logout();
    console.log('Logout clicked');
  }
}