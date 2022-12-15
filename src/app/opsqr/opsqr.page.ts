import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { LoadingController, ToastController } from '@ionic/angular';

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

import { BarcodeScanner, BarcodeScannerOptions } from '@awesome-cordova-plugins/barcode-scanner/ngx';

import { EmailComposer, EmailComposerOptions } from '@awesome-cordova-plugins/email-composer/ngx';



@Component({
  selector: 'app-opsqr',
  templateUrl: './opsqr.page.html',
  styleUrls: ['./opsqr.page.scss'],
})
export class OpsqrPage implements OnInit {
  scannedData: any;
  encodedData: '';
  encodeData: any;
  inputData: any;
  templatePrams: any;
  hasAccount: false;

  

  constructor(private barcodeScanner: BarcodeScanner,
    public toastController: ToastController,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private emailComposer: EmailComposer
    ) { }

  ngOnInit() {

    
  }

  
  

  camara() {
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      saveHistory: true,
      torchOn: false,
      prompt: 'Coloque un código dentro del área de escaneo',
      resultDisplayDuration: 1000,
      formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
      orientation: 'portrait',
    };

    this.barcodeScanner.scan(options).then(barcodeData => {
      this.scannedData = barcodeData.text;
      console.log('Barcode data', this.scannedData);
      
    }).catch(err => {
      console.log('Error', err);
    });
  }

  generar() {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.inputData).then((encodedData) => {
      console.log(encodedData);
      this.encodedData = encodedData;
    }, (err) => {
      console.log('Error occured : ' + err);
    });
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 700,
    });
    toast.present();
  }

  enviarEmail() {
    emailjs.send('service_registrapp2021', 'template_w78b9du', this.templatePrams, 'user_3co4kFEPhfQPOJOF85cZi')
    .then((result: EmailJSResponseStatus) => {
      console.log(result.text);
      this.router.navigate(['/login']);
      this.presentToast('¡Se ha enviado el correo electronico correctamente!');
    }, (error) => {
      console.log(error.text);
    });
  }

  logout() {
    this.router.navigate(['/login']);
    this.presentToast('Se ha cerrado sesión correctamente');
  }

  
  //emailComposer() {
    //this.composer.open({
      //to:'demo@demo.com'
    //})
  //}

  async checkAccount() {
    this.hasAccount = await this.emailComposer.hasAccount();

  }
  
  sendMail() {         

    const email: EmailComposerOptions = {
      to: 'fel.neiram@duocuc.cl',
      cc: 'jos.alvarezd@duocuc.cl',
      attachments: [
      ],
      subject: 'por favor funciona',
      body: 'su contraseña: ',
      isHtml: true
    };

    this.emailComposer.open(email);

  }

}
