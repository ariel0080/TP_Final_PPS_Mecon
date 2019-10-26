import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export abstract class Usuario {
    public nombre: string;
    public apellido: string;
    public dni: string;
    public foto: string;
    public activo: boolean;
    public email: string;
    public rol: string;
    public id: string;

    constructor(nombre: string, apellido: string, dni: string, foto: string, activo: boolean, email: string,
         rol: string, id: string ){
            this.nombre = nombre;
            this.apellido = apellido;
            this.dni = dni;
            this.foto = foto;
            this.activo = activo;
            this.email = email;
            this.rol = rol;
            this.id = id;        
    }
}
