import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LeerQRComponent } from './leer-qr/leer-qr.component';
import { SacarFotoComponent } from './sacar-foto/sacar-foto.component';
import { AvatarComponent } from './avatar/avatar.component';



@NgModule({
  declarations: [LeerQRComponent, SacarFotoComponent, AvatarComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [LeerQRComponent, SacarFotoComponent, AvatarComponent]
})
export class NuestrosComponentesModule { }
