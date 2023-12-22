import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})

export class isAuthenticated implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {

    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      return this.router.createUrlTree(['/auth/login']);
    }

  }
}
