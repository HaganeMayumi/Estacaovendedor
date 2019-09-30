import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatInPage } from '../chat-in/chat-in';
import { AlertController } from 'ionic-angular';
import {  animationsList } from '../../app/animations';
import { AuditoriaPage } from '../auditoria/auditoria';
import { HistoricoPage } from '../historico/historico';
import { ProdutosPage } from '../produtos/produtos';
import { CursosPage } from '../cursos/cursos';
import { FaqPage } from '../faq/faq';

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
  ChatGo(){
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

  Faq() {
    this.navCtrl.push(FaqPage);
  }
  Chat() {
    this.navCtrl.push(ChatPage);
  }
  goToAuditoria() {
    this.navCtrl.push(AuditoriaPage);
  }
  goToHistorico() {
    this.navCtrl.push(HistoricoPage);
  }
  details() {
    this.navCtrl.push(ProdutosPage);
  }
  Cursos(){
    this.navCtrl.push(CursosPage);
  }

}

