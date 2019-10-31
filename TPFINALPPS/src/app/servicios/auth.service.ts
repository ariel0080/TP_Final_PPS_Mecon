import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../clases/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: Observable<firebase.User>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private userService: UsuarioService,
    private router: Router
  ) {
    this.userData = angularFireAuth.authState;
  }

  registracion(usuario: Usuario, password: string): string {
    let salida = 'Se dio de alta un nuevo usuario';

    this.angularFireAuth.auth
      .createUserWithEmailAndPassword(usuario.email, password)
      .then(res => {
        this.userService.persistirUsuario(usuario, res.user.uid);
      })
      .catch(error => {
        salida = error.message;
      });

    return salida;
  }

  ingresar(email: string, password: string): string {
    let salida = 'El usuario ingreso correctamente';

    this.angularFireAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {})
      .catch(err => {
        salida = err.message;
      });

    return salida;
  }

  ingresarAnonimo(): string {
    let salida = 'El usuario anonimo ingreso correctamente';

    this.angularFireAuth.auth
      .signInAnonymously()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        salida = err.message;
      });

    return salida;
  }

  salir(): string {
    let salida = 'El usuario salio correctamente';
    this.angularFireAuth.auth.signOut().then((res) => {
      console.log(res);
      this.router.navigate(['/login']);
    }).catch(err => {
      salida = err.message;
    });

    return salida;
  }
}
