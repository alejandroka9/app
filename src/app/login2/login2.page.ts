import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page {
  welcomeMessage: string = '';

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    const storedUser = localStorage.getItem('usuario');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      this.welcomeMessage = `Bienvenido ${parsedUser.username}`;
    }
  }

  cerrarSesion() {
    localStorage.removeItem('usuario');
    this.navCtrl.navigateForward('/login'); // Redirigir a la página de inicio de sesión
  }
}
