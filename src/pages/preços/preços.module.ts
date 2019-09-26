import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreçosPage } from './preços';

@NgModule({
  declarations: [
    PreçosPage,
  ],
  imports: [
    IonicPageModule.forChild(PreçosPage),
  ],
})
export class PreçosPageModule {}
