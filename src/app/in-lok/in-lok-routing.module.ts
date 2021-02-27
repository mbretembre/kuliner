import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InLokPage } from './in-lok.page';

const routes: Routes = [
  {
    path: '',
    component: InLokPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InLokPageRoutingModule {}
