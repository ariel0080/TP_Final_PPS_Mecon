import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LeerQRComponent } from './leer-qr/leer-qr.component';
import { SacarFotoComponent } from './sacar-foto/sacar-foto.component';



@NgModule({
  declarations: [LeerQRComponent, SacarFotoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [LeerQRComponent, SacarFotoComponent]
})
export class NuestrosComponentesModule { }
