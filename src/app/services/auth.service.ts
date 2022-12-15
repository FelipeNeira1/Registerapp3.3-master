import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from, of, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _storage: Storage | null = null;
  userInfo = new BehaviorSubject(null);

  jwtHelper = new JwtHelperService();

  checkUserObs:Observable<any>;

  constructor(

    private readonly storage:Storage,

    private readonly platform:Platform

  ) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  //loadUserInfo() {
    //let readyPlatformObs = from(this.platform.ready());
 
    //this.checkUserObs = readyPlatformObs.pipe(
      //switchMap(() => {
          //return from(this.getAccessToke());
      //}),
      //map((token) => {
        //if(!token){
          //return null;
        //}
          //var decodedUser = this.jwtHelper.decodeToken(token);
          //this.userInfo.next(decodedUser);
          //return true;
      //}));
    
  //}

  //getAccessToke(){
    //return this.storage.get("access_token");
  //}

  useLogin(user: any): Observable<boolean> {
    if (user && user.user && user.password) {
     var sampleJwt =
     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QiLCJzdWIiOjIsImlhdCI6MTYwNDMwOTc0OSwiZXhwIjoxNjA0MzA5ODA5fQ.jHez9kegJ7GT1AO5A2fQp6Dg9A6PBmeiDW1YPaCQoYs";
    
     return of(sampleJwt).pipe(
     map((token) => {
       if (!token) {
       return false;
       }
       this.storage.set('access_token',token);
       var decodedUser = this.jwtHelper.decodeToken(token);
       this.userInfo.next(decodedUser);
       console.log(decodedUser);
       return true;
     })
     );
    }
    return of(false);
    
   }


}
