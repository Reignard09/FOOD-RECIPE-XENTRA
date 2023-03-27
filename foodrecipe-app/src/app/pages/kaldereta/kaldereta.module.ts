import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KalderetaPageRoutingModule } from './kaldereta-routing.module';

import { KalderetaPage } from './kaldereta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KalderetaPageRoutingModule
  ],
  declarations: [KalderetaPage]
})
export class KalderetaPageModule {}
