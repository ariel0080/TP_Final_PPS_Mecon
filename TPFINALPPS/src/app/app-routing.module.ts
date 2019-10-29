import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GenerarQRComponent } from './componentes/generar-qr/generar-qr.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  { path: 'qr', loadChildren: './pages/qr/qr.module#QrPageModule' },  { path: 'probar-foto', loadChildren: './pages/probar-foto/probar-foto.module#ProbarFotoPageModule' },
  { path: 'registro', loadChildren: './pages/registro/registro.module#RegistroPageModule' },

  //{ path: 'prueba', loadChildren: './pages/lectorqr/lectorqr.page.html' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
