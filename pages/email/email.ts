import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-email',
  templateUrl: 'email.html'
})
export class emailPage {


  constructor(public navCtrl: NavController, 
              public viewCtrl: ViewController) {
  }
  backHome(){
      this.navCtrl.push(HomePage);
  }

}
