import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(
    private firestore: AngularFirestore
  ) {}

  persistirUsuario(usuario: Usuario, uid: string) {
    this.firestore
      .collection('/usuarios')
      .doc(uid)
      .set(Object.assign({}, JSON.parse(JSON.stringify(usuario))));
    console.log('Alta correcta');
  }
}
