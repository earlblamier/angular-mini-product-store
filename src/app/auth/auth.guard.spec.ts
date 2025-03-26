import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['isAuthenticated']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });

    authGuard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should allow activation if the user is authenticated', () => {
    authService.isAuthenticated.and.returnValue(true); // Mock user is authenticated

    const result = authGuard.canActivate({} as any, {} as any);

    expect(result).toBeTrue();
    expect(authService.isAuthenticated).toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should deny activation and redirect to login if the user is not authenticated', () => {
    authService.isAuthenticated.and.returnValue(false); // Mock user is not authenticated

    const result = authGuard.canActivate({} as any, { url: '/dashboard' } as any);

    expect(result).toBeFalse();
    expect(authService.isAuthenticated).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/login'], { queryParams: { returnUrl: '/dashboard' } });
  });
});