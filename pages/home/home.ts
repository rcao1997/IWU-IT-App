import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { emailPage } from '../email/email';
import { networkPage } from '../network/network';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  loademailPage(){
    this.navCtrl.push(emailPage);
  }
  loadpasswordPage(){
    this.navCtrl.push(passwordPage);
  }
