import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { animationsList } from '../../app/animations';
import { FaqPage } from '../faq/faq';
import { ChatPage } from '../chat/chat';
import { CursosPage } from '../cursos/cursos';
import{ProdutosPage} from '../produtos/produtos';
import{HistoricoPage} from '../historico/historico';
import{ AuditoriaPage} from '../auditoria/auditoria';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: animationsList
})
export class HomePage {
  isOpen: boolean;
  startAnim: string;
  public tap: number = 0;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

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
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Entrega aceita',
      subTitle: 'Você será direcionado para a página de detalhes da compra',
      buttons: ['OK']
    });
    alert.present();
  }
}
