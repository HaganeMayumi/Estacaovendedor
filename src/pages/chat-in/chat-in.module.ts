import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatInPage } from './chat-in';

@NgModule({
  declarations: [
    ChatInPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatInPage),
  ],
})
export class ChatInPageModule {}
