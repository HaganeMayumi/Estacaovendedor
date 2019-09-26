import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuditoriaPage } from '../auditoria/auditoria';
import { ChatPage } from '../chat/chat';
import { FaqPage } from '../faq/faq';
import { animationsList } from '../../app/animations';

@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
  animations: animationsList
})
export class HistoricoPage {
  isOpen: boolean;
  startAnim: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  openNexus() {
    this.isOpen = !this.isOpen;
  }

  animStart(e) {
    console.log(e);

  }
  animEnd(e) {
    console.log(e);
    this.startAnim = 'animate-running';
  }

  goToAuditoria() {
    this.navCtrl.push(AuditoriaPage);
  }
  goToChat() {
    this.navCtrl.push(ChatPage);
  }

  goToFaq() {
    this.navCtrl.push(FaqPage);
  }
}
