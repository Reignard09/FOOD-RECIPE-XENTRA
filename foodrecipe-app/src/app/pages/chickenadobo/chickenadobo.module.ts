import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChickenadoboPageRoutingModule } from './chickenadobo-routing.module';

import { ChickenadoboPage } from './chickenadobo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChickenadoboPageRoutingModule
  ],
  declarations: [ChickenadoboPage]
})
export class ChickenadoboPageModule {}
