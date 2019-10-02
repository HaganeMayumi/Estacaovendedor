import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { animationsList } from '../../app/animations';
import { FaqPage } from '../faq/faq';
import { ChatPage } from '../chat/chat';
import{ProdutosPage} from '../produtos/produtos';
import{HistoricoPage} from '../historico/historico';
import{ AuditoriaPage} from '../auditoria/auditoria';

/**
 * Generated class for the CursosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html',
  animations: animationsList
})
export class CursosPage {
  isOpen: boolean;
  startAnim: string;
  public tap: number = 0;
  opcao: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.opcao = "ofertas";
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
  aumentar(e) {
    this.tap++
  }
  diminuir(e) {
    this.tap--
  }
}
