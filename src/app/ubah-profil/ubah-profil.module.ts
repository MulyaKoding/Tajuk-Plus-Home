import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbahProfilPageRoutingModule } from './ubah-profil-routing.module';

import { UbahProfilPage } from './ubah-profil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbahProfilPageRoutingModule
  ],
  declarations: [UbahProfilPage]
})
export class UbahProfilPageModule {}
