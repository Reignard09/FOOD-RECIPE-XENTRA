import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OmelettePageRoutingModule } from './omelette-routing.module';

import { OmelettePage } from './omelette.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OmelettePageRoutingModule
  ],
  declarations: [OmelettePage]
})
export class OmelettePageModule {}
