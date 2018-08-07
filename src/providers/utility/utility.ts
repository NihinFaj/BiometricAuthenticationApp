import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the UtilityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI. */
@Injectable()
export class UtilityProvider {

  constructor(public http: HttpClient, public alertCtrl: AlertController) {
  }

  //Show popup alert
  presentAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: msg,
      buttons: ['Ok']
    });
    alert.present();
  }

}
