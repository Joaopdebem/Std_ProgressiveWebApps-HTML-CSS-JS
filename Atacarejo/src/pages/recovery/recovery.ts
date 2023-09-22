import { Component } from '@angular/core';
import { ViewController, ModalController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-recovery',
  templateUrl: 'recovery.html'
})
export class RecoveryPage {
  constructor(
    private viewCtrl: ViewController,
    private modalCtrl: ModalController
    ) {
  }

  goToSignup(){
    let createAccountModal = this.modalCtrl.create(SignupPage);
    createAccountModal.present();
  }
}
