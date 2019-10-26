import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cliente } from '../clases/cliente';
import { Empleado } from '../clases/empleado';
import { Supervisor } from '../clases/supervisor';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore: AngularFirestore) {}

  altaCliente(cliente: Cliente): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('/usuarios')
        .add({
          id: cliente.id,
          nombre: cliente.nombre,
          apellido: cliente.apellido,
          dni: cliente.dni,
          foto: cliente.foto,
          activo: cliente.activo,
          email: cliente.email,
          rol: cliente.rol
        })
        .then(
          res => {
            resolve(res);
          },
          err => reject(err)
        );
    });
  }

  actualizarUsuario(usuario: Usuario): Promise<any> {
    if (usuario instanceof Supervisor) {
      return new Promise<any>((resolve, reject) => {
        this.firestore
          .collection('/usuarios')
          .add({
            id: (usuario as Supervisor).id,
            nombre: (usuario as Supervisor).nombre,
            apellido: (usuario as Supervisor).apellido,
            dni: (usuario as Supervisor).dni,
            cuil: (usuario as Supervisor).cuil,
            foto: (usuario as Supervisor).foto,
            perfil: (usuario as Supervisor).perfil,
            activo: (usuario as Supervisor).activo,
            email: (usuario as Supervisor).email,
            rol: (usuario as Supervisor).rol
          })
          .then(
            res => {
              resolve(res);
            },
            err => reject(err)
          );
      });
    } else if (usuario instanceof Empleado) {
      return new Promise<any>((resolve, reject) => {
        this.firestore
          .collection('/usuarios')
          .add({
            id: (usuario as Empleado).id,
            nombre: (usuario as Empleado).nombre,
            apellido: (usuario as Empleado).apellido,
            dni: (usuario as Empleado).dni,
            cuil: (usuario as Empleado).cuil,
            foto: (usuario as Empleado).foto,
            tipoEmpleado: (usuario as Empleado).tipoEmpleado,
            activo: (usuario as Empleado).activo,
            email: (usuario as Empleado).email,
            rol: (usuario as Empleado).rol
          })
          .then(
            res => {
              resolve(res);
            },
            err => reject(err)
          );
      });
    } else {
      return new Promise<any>((resolve, reject) => {
        this.firestore
          .collection('/usuarios')
          .add({
            id: (usuario as Cliente).id,
            nombre: (usuario as Cliente).nombre,
            apellido: (usuario as Cliente).apellido,
            dni: (usuario as Cliente).dni,
            foto: (usuario as Cliente).foto,
            activo: (usuario as Cliente).activo,
            email: (usuario as Cliente).email,
            rol: (usuario as Cliente).rol
          })
          .then(
            res => {
              resolve(res);
            },
            err => reject(err)
          );
      });
    }
  }
}
