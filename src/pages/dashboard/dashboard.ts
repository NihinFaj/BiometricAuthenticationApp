import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettersandgettersProvider } from '../../providers/settersandgetters/settersandgetters';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  data = { name: ""}

  constructor(public navCtrl: NavController, public navParams: NavParams, public setAndGet: SettersandgettersProvider) {
    console.log(this.setAndGet.UserName)
    this.data.name = this.setAndGet.UserName;
  }

  ionViewDidLoad() {
  }

}
