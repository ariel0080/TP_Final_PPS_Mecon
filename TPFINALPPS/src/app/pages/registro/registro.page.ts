import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public habilitarCuil:boolean=false;
  public habilitarTipoDeEmpleado:boolean=false;
  public habilitarPerfil:boolean=false;
  public ocultar:boolean=true;

  public nombre:string;
  public apellido:string;
  public dni:string;
  public email:string;
  public cuil:string;
  public tipoDeEmpleado:string;
  public perfil:string;

  public password1:string;
  public password2:string;

  
  constructor(private authService: AuthService) {

    
   }

  ngOnInit() {
  }

  rbInputs(event){
    console.log(event.detail.value);
    this.ocultar =false;
    switch(event.detail.value){
      case "cliente":
        this.habilitarCuil=true;
        this.habilitarTipoDeEmpleado=true;
        this.habilitarPerfil=true;
        break;
      case "empleado":
        this.habilitarCuil=false;
        this.habilitarTipoDeEmpleado=false;
        this.habilitarPerfil=true;
        break;
      case "supervisor":
          this.habilitarCuil=false;
          this.habilitarTipoDeEmpleado=true;
          this.habilitarPerfil=false;
        break;
    }
  }

  registrarse() {
    //this.authService.SignUp(this.email, this.clave);
    console.log("lo mando a registrar");
  }

}
