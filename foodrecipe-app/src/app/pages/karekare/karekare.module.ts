import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KarekarePageRoutingModule } from './karekare-routing.module';

import { KarekarePage } from './karekare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KarekarePageRoutingModule
  ],
  declarations: [KarekarePage]
})
export class KarekarePageModule {}
