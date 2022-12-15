import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpsqrPageRoutingModule } from './opsqr-routing.module';

import { OpsqrPage } from './opsqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpsqrPageRoutingModule
  ],
  declarations: [OpsqrPage]
})
export class OpsqrPageModule {}
