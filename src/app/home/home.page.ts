import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router  } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user = {
    user: '',
    password: '',
  };
  field: String = '';
  constructor(
    private router: Router,
    public toastController: ToastController,
    private authService: AuthService
  ) {}

  ngOnInit() {
  }
// ingresar 1 ya no lo uso
  ingresar() {
    if (this.validateModel(this.user)) {
      this.presentToast('Bienvenido ' + this.user.user);

      const navigationExtras: NavigationExtras = {
        state: {
          user: this.user.user,
        },
      };
      this.router.navigate(['/login'], navigationExtras);
    } else {
      this.presentToast('Falta Ingresar: ' + this.field, 4500);
    }
  }

  validateModel(model: any) {
    for (var [key, value] of Object.entries(model)) {
      if (value == '') {
        this.field = key;
        return false;
      }
    }
    return true;
  }
  async presentToast(msg: string, duracion?: number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duracion ? duracion : 2000,
    });
    toast.present();
  }
// Ingresar 2 este si se usa 
  ingresar2() {
    this.authService
      .useLogin(this.user)

      .subscribe(
        (value) => {
          if (value) {
            this.presentToast('Bienvenido ' + this.user.user);
            // se envia la persistencia  
            let navigationExtras: NavigationExtras = {
              state: {
                user: this.user,
              },
            };
            this.router.navigate(['/login'], navigationExtras);

            alert('Inicio la sesion correctamente');
          } else {
            if (!this.validateModel(this.user)) {
              this.presentToast('Falta Ingresar: ' + this.field, 4500);  
            }
          }
        },
        (error) => {
          alert('Fallo el inicio de sesion');
        }
      );
  }

  restablecer() {}
}
