import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpsqrPage } from './opsqr.page';

const routes: Routes = [
  {
    path: '',
    component: OpsqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpsqrPageRoutingModule {}
