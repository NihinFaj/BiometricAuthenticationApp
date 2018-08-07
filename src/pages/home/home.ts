import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettersandgettersProvider } from '../../providers/settersandgetters/settersandgetters';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data = { name: ""}

  constructor(public navCtrl: NavController, public setAndGet: SettersandgettersProvider) {
    console.log(this.setAndGet.UserName)
    this.data.name = this.setAndGet.UserName;
  }

}
