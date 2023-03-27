import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KalderetaPage } from './kaldereta.page';

const routes: Routes = [
  {
    path: '',
    component: KalderetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KalderetaPageRoutingModule {}
