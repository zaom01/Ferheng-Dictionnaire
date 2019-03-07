import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class SecureinnerpagesGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router
  ){ }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isLoggedIn) {
   window.alert("You are not allowed to access this URL!");
    this.router.navigate(['Profile'])
 }
    return true;
  }

}
