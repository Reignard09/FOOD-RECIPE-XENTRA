import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaghettiPage } from './spaghetti.page';

const routes: Routes = [
  {
    path: '',
    component: SpaghettiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaghettiPageRoutingModule {}
