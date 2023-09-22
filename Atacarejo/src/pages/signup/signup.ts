import { Component } from '@angular/core';
import { ModalController, NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
    ) {

  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

  alertConfirmAccount(){
    let alert = this.alertCtrl.create({
      title: 'Conta criada',
      subTitle: 'Entre em sua conta.',
      buttons: ['Ok'],
      cssClass: 'alert-confirm'
    });
    alert.present(alert);
  }

}
