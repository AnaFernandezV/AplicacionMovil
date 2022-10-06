import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [

      {
        path: 'perfil/:rut',
        loadChildren:() => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'administrar',
        loadChildren:() => import('../home/home.module').then(m => m.HomePageModule)
      },
    
      {
        path: 'asistencia',
        loadChildren:() => import('../asistencia/asistencia.module').then(m => m.AsistenciaPageModule)
      },
    
      {
        path: 'clases',
        loadChildren:() => import('../clases/clases.module').then(m => m.ClasesPageModule)
      },
      {
        path: 'horario',
        loadChildren:() => import('../horario/horario.module').then(m => m.HorarioPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
