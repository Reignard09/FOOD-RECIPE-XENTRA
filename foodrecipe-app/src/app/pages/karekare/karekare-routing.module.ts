import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KarekarePage } from './karekare.page';

const routes: Routes = [
  {
    path: '',
    component: KarekarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KarekarePageRoutingModule {}
