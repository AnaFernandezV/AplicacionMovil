import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [

      {
        path: 'perfil',
        loadChildren:() => import('../alumno/alumno.module').then(m => m.AlumnoPageModule)
      },
      {
        path: 'asistencia',
        loadChildren:() => import('../asistencia/asistencia.module').then(m => m.AsistenciaPageModule)
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
