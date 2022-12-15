import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private storage: Storage) {
  }

  canActivate(): boolean{
    const mytoken = this.storage.get('access_token');
    if (mytoken) {
      return true;
    }
    return false;
  }
}
