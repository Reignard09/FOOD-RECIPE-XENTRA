import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OmelettePage } from './omelette.page';

const routes: Routes = [
  {
    path: '',
    component: OmelettePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OmelettePageRoutingModule {}
