import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
//import { Usuario } from '../../clases/usuario';
import { Cliente } from 'src/app/clases/cliente';
import { LeerQRComponent } from '../../componentes/leer-qr/leer-qr.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  //public miUsuario: Cliente;
  public mostrar: boolean;
  public chk: boolean;
  public email: string;
  public clave: string;

  constructor(private authService: AuthService) {
    //this.miUsuario = new Cliente();
  }

  ngOnInit() {}

  login() {
    //this.mostrar = this.authService.login(this.miUsuario);
    this.authService.SignIn(this.email, this.clave);
  }

  registrarse() {
    this.authService.SignUp(this.email, this.clave);
  }

  completar(parametro) {
    switch (parametro) {
      case 'admin':
        this.email = 'admin';
        this.clave = 'admin';
        break;
      case 'user':
        this.email = 'usuario';
        this.clave = 'usuario';
        break;
    }
  }

  checkeado() {
    console.log('Nuevo estado:' + this.chk);
  }
}
