import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { UtilityProvider } from '../../providers/utility/utility'
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { SettersandgettersProvider } from '../../providers/settersandgetters/settersandgetters';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public utility: UtilityProvider,
    public faio: FingerprintAIO, public setAndGet: SettersandgettersProvider) {
  }

  data = {
    userName: "",
    passWord: ""
  }

  ionViewDidLoad() {
  }

  // goToDashboard(){
  //   if (!this.data.userName || !this.data.passWord)
  //   {
  //     this.utility.presentAlert("Please enter Username and Password");
  //     return;            
  //   }
  //   else {
  //     console.log("I am inside Login With Fingerprint");
  //   //Check if Fingerprint is available
  //   this.faio.isAvailable()
  //   .then(result => {
  //     console.log(result);
  //     if(result === "finger"){
  //       //Fingerprint Exist
  //       console.log("Fingerprint Exist!")
  //       this.faio.show({
  //         clientId: 'GTWorld-Fingerprint',
  //         clientSecret: 'gtworldv2', //Only necessary for Android
  //         disableBackup: true, //Only for Android(optional)
  //         localizedFallbackTitle: 'Use Pin', //Only for iOS
  //         localizedReason: 'Please Authenticate' //Only for iOS
  //       })
  //       .then((result: any) => {
  //         //Fingerprint was successfully verified
  //         console.log(result);
  //         if(result == "Success"){
  //         //Go to dashboard
  //         this.setAndGet.UserName = this.data.userName;
  //         this.navCtrl.push("")
  //         }
  //         else {
  //           this.utility.presentAlert(result);
  //           console.log(result);
  //         }
  //       })
  //       .catch((error: any) => {
  //         //Fingerprint was not successfully verified          
  //         this.utility.presentAlert(error);
  //         console.log(error);
  //       });
  //     }
  //     else {
  //       //Fingerprint Does Not Exist        
  //       this.utility.presentAlert("Fingerprint does not exist on this device!");
  //       console.log("Fingerprint does not exist on this device!")
  //     }
  //   })
  //   }
  // }

  goToDashboard(){
          this.setAndGet.UserName = this.data.userName;
          this.navCtrl.setRoot("DashboardPage");
  }

}
