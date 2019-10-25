import { Component, OnInit } from '@angular/core';

import { Usuario } from '../../clases/usuario';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  
  public miUsuario: Usuario;
  public mostrar: boolean;
  public chk: boolean;

  constructor(private authService: AuthService) {
    this.miUsuario = new Usuario();
  }

  ngOnInit() {}

  login() {
    //this.mostrar = this.authService.login(this.miUsuario);
    this.authService.SignIn(this.miUsuario.usuario, this.miUsuario.clave);
  }

  registrarse(){
    this.authService.SignUp(this.miUsuario.usuario, this.miUsuario.clave);
  }

  completar(parametro) {
    switch (parametro) {
      case 'admin':
        this.miUsuario.usuario = 'admin';
        this.miUsuario.clave = 'admin';
        break;
      case 'user':
        this.miUsuario.usuario = 'usuario';
        this.miUsuario.clave = 'usuario';
        break;
    }
  }

  checkeado() {
    console.log('Nuevo estado:' + this.chk);
  }
}
