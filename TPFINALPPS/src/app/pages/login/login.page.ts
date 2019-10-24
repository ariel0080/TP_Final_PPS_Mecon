import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { AuthenticationService } from '../../servicios/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public miUsuario: Usuario;
  public mostrar: boolean;

  constructor(private authService: AuthenticationService) { 
    this.miUsuario = new Usuario();
  }

  ngOnInit() {
  }
  
 login(){
  this.mostrar = this.authService.login(this.miUsuario);
 }

 completarAdmin(){
  this.miUsuario.usuario = "admin";
  this.miUsuario.clave = "admin";
 }

 completarUser(){

  this.miUsuario.usuario = "usuario";
  this.miUsuario.clave = "usuario";
 }
}
