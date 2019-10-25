import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/servicios/authentication.service';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public miUsuario:Usuario;
  public mostrar:boolean;
  public chk:boolean;

  constructor(private authService: AuthenticationService) { 
    this.miUsuario = new Usuario;
  }

  ngOnInit() {
  }
  
 login(){
  //this.authService.login(this.miUsuario);
  //console.log("respuesta del auth: ", this.authService.login(this.miUsuario) );
  this.mostrar = this.authService.login(this.miUsuario);
 }

 completar(parametro){

    switch(parametro){
      case "admin":
          this.miUsuario.usuario = "admin";
          this.miUsuario.clave = "admin";
          break;
      case "user":
          this.miUsuario.usuario = "usuario";
          this.miUsuario.clave = "usuario";
          break;
    }
  
 }


 checkeado(){
   
  console.log('Nuevo estado:' + this.chk);
 }
}
