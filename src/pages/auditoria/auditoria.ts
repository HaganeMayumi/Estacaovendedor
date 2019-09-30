import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { animationsList } from '../../app/animations';
import { FaqPage } from '../faq/faq';
import { ChatPage } from '../chat/chat';
import { CursosPage } from '../cursos/cursos';
import{ProdutosPage} from '../produtos/produtos';
import{HistoricoPage} from '../historico/historico';



@IonicPage()
@Component({
  selector: 'page-auditoria',
  templateUrl: 'auditoria.html',
  animations: animationsList
})
export class AuditoriaPage {
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

