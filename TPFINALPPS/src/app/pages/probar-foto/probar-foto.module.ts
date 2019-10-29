import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProbarFotoPage } from './probar-foto.page';
import { NuestrosComponentesModule } from 'src/app/componentes/nuestros-componentes.module';

const routes: Routes = [
  {
    path: '',
    component: ProbarFotoPage
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
  declarations: [ProbarFotoPage]
})
export class ProbarFotoPageModule {}
