import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthService } from './services/auth.service';

import { IonicStorageModule } from '@ionic/storage-angular';



import { Camera } from '@awesome-cordova-plugins/camera/ngx';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot({ rippleEffect:false, mode: 'md'}), AppRoutingModule, BrowserAnimationsModule, IonicStorageModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, AuthService, Camera, BarcodeScanner, EmailComposer],
  bootstrap: [AppComponent],
})
export class AppModule {}

const routes: Routes = [
  //{
    //path: '',

    //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  //},
  {
    path: 'home',

    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',

    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate:[AuthService]
  },
];


//@NgModule({
  //...
  //imports: [
    //BrowserModule,
    //IonicModule.forRoot({
      //platform: {
        /** The default `desktop` function returns false for devices with a touchscreen.
        * This is not always wanted, so this function tests the User Agent instead.
        **/
        //'desktop': (win) => {
          //const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(win.navigator.userAgent);
          //return !isMobile;
        //}
      //},
    //}),
    //AppRoutingModule
  //]
//})