import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {
  welcomeMessage: string = '';

  ngOnInit() {
    const storedUser = localStorage.getItem('usuario');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      this.welcomeMessage = `Bienvenido ${parsedUser.username}`;
    }
  }
}
