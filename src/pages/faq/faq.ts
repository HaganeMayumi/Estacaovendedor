import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PergfreqPage } from '../pergfreq/pergfreq';
import { ChatPage } from '../chat/chat';
import { CursosPage } from '../cursos/cursos';
import{ProdutosPage} from '../produtos/produtos';
import{HistoricoPage} from '../historico/historico';
import{ AuditoriaPage} from '../auditoria/auditoria';
import { HomePage } from '../home/home';

/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {
  isOpen: boolean;
  startAnim: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
  }
  
  Perg(){
    this.navCtrl.push(PergfreqPage);
  }
  
  Home(){
    this.navCtrl.push(HomePage);
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
