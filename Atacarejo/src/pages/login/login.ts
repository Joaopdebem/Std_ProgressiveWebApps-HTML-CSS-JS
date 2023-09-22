import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { RecoveryPage } from '../recovery/recovery';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
    ) {

  }

  goToSignup(){
    let createAccountModal = this.modalCtrl.create(SignupPage);
    createAccountModal.present();
  }

  goToRecovery(){
    this.navCtrl.push(RecoveryPage);
  }

}
