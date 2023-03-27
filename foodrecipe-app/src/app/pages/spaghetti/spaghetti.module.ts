import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpaghettiPageRoutingModule } from './spaghetti-routing.module';

import { SpaghettiPage } from './spaghetti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpaghettiPageRoutingModule
  ],
  declarations: [SpaghettiPage]
})
export class SpaghettiPageModule {}
