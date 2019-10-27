import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { GenerarQRComponent } from 'src/app/componentes/generar-qr/generar-qr.component';
import { QrPageModule } from '../qr/qr.module';
import { LeerQRComponent } from 'src/app/componentes/leer-qr/leer-qr.component';
import { NuestrosComponentesModule } from 'src/app/componentes/nuestros-componentes.module';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NuestrosComponentesModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
