import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuditoriaPage } from '../auditoria/auditoria';
import { ChatPage } from '../chat/chat';
import { FaqPage } from '../faq/faq';
import { animationsList } from '../../app/animations';
import { ProdutosPage } from '../produtos/produtos';
import { CursosPage } from '../cursos/cursos';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
  animations: animationsList
})
export class HistoricoPage {
  isOpen: boolean;
  startAnim: string;
  escolha: any;
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
  Home(){
    this.navCtrl.push(HomePage);
  }


}
