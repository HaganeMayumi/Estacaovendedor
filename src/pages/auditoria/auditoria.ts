import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  animationsList } from '../../app/animations';
@IonicPage()
@Component({
  selector: 'page-auditoria',
  templateUrl: 'auditoria.html',
  animations: animationsList
})
export class AuditoriaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuditoriaPage');
  }


}

