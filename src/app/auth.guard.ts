import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { StorageService } from './services/auth/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private storageService: StorageService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.storageService.isLoggedIn()) {
      const requiredRoles = route.data['roles'] as Array<string>;
      if (requiredRoles.includes(this.storageService.getUser().role)) {
        return true;
      } else {
        this.router.navigate(['/unauthorized']);
        return false;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
