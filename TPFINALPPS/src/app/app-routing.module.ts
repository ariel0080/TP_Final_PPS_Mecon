import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GenerarQRComponent } from './componentes/generar-qr/generar-qr.component';
import { SplashComponent } from './componentes/splash/splash.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  { path: 'qr', loadChildren: './pages/qr/qr.module#QrPageModule' },
  { path: 'qr', loadChildren: './pages/qr/qr.module#QrPageModule' },
  { path: 'splash', component: SplashComponent }
  //{ path: 'prueba', loadChildren: './pages/lectorqr/lectorqr.page.html' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
