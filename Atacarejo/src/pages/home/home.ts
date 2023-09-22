import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public photosTab: any;
  public profileTab: any;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
    )
    {
      //this.photosTab =PhotosPage;
      //this.profileTab = PhotosPage;
    }


}
