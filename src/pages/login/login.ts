import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  toggleSpinner = true;
  selecionar="entrar";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goToHomePage(){
    this.toggleSpinner=false;
    return this.navCtrl.push(HomePage);
    }

    segmentChanged(ev: any) {
            console.log('Segment button clicked', ev);
    }
}
