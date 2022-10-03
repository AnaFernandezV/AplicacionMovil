import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'recuperar-pass',
    loadChildren: () => import('./pages/recuperar-pass/recuperar-pass.module').then( m => m.RecuperarPassPageModule)
  },
  {
    path: 'docente',
    loadChildren: () => import('./pages/docente/docente.module').then( m => m.DocentePageModule),
    canActivate: [AuthGuard]
  },
  
  {
    path: 'alumno',
    loadChildren: () => import('./pages/alumno/alumno.module').then( m => m.AlumnoPageModule),
    canActivate: [AuthGuard]
  },
  
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule),
    canActivate: [AuthGuard]
  },
  
  {
    path: 'horario',
    loadChildren: () => import('./pages/horario/horario.module').then( m => m.HorarioPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error404/error404.module').then( m => m.Error404PageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
