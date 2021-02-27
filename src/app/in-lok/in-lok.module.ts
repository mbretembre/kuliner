import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InLokPageRoutingModule } from './in-lok-routing.module';

import { InLokPage } from './in-lok.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InLokPageRoutingModule
  ],
  declarations: [InLokPage]
})
export class InLokPageModule {}
