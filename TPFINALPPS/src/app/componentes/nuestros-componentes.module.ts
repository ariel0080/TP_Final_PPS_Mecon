import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LeerQRComponent } from './leer-qr/leer-qr.component';



@NgModule({
  declarations: [LeerQRComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [LeerQRComponent]
})
export class NuestrosComponentesModule { }
