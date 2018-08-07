import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

/**
 * Generated class for the LoginpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loginpage',
  templateUrl: 'loginpage.html',
})
export class LoginpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  data = {
    userName: "",
    passWord: ""
  }

  ionViewDidLoad() {
  }

  goToDashboard(){
    if (!this.data.userName || !this.data.passWord)
    {
      alert("Invalid Username or Password");
      console.log("Invalid Username or Password");
      return;            
    }


  }

}
