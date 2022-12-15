import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  constructor(public toastController: ToastController, private router: Router) { }

  restablecer(){
  this.presentToast ('Se ha enviado la contraseña de recuperación al correo');
}

async presentToast(msg: string) {
  const toast = await this.toastController.create({
    message: msg,
    duration:1500,
    cssClass: 'toastRecovery'
  });
  toast.present();
}
  ngOnInit() {
  }

  close(){
    this.router.navigate(['/home']);
  }

}