import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  image: string;
  usuario: any;
  code: any;
  
  constructor( private router: Router,
    private barcodeScanner: BarcodeScanner,
    private activeRoute: ActivatedRoute, ) {
      //Se recibe la persistencia
    this.activeRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario = this.router.getCurrentNavigation().extras.state.user.user;
      }
    });
   }


  ngOnInit() {
  }

  camara() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
