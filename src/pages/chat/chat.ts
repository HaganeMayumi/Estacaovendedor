import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatInPage } from '../chat-in/chat-in';
import { AlertController } from 'ionic-angular';
import {  animationsList } from '../../app/animations';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
  animations: animationsList
})
export class ChatPage {
  isOpen: boolean;
  startAnim:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  getItems(toggle){
    if(toggle==false) return true;
    return false;
  }

  openNexus(){
    this.isOpen = !this.isOpen;
  }
  animStart(e){
    console.log(e);

  }
  animEnd(e){
    console.log(e);
    this.startAnim='animate-running';
  }
  ChatIn(){
    this.navCtrl.push(ChatInPage);
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Chat Encerrado!',
      subTitle: 'O chat com cliente foi encerrado',
      buttons: ['OK']
    });
    alert.present();
  }
}

