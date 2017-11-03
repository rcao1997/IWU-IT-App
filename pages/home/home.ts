import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { emailPage } from '../email/email';


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
}
