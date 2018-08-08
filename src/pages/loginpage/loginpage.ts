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
    userName: ""
  }

  ionViewDidLoad() {
  }

  login(){
    if (!this.data.userName)
    {
      this.utility.presentAlert("Please enter Username!");
      return;            
    }
    else {
    //Check if Fingerprint or Face  is available
    this.faio.isAvailable()
    .then(result => {
      console.log(result);
      if(result === "finger" || result === "face"){
        //Fingerprint or Face Auth is available
        console.log("Fingerprint or Face Exist!")
        this.faio.show({
          clientId: 'NihinDemoBioAuthApp',
          clientSecret: 'nihinBioAuthDemo', //Only necessary for Android
          disableBackup: true, //Only for Android(optional)
          localizedFallbackTitle: 'Use Pin', //Only for iOS
          localizedReason: 'Please Authenticate' //Only for iOS
        })
        .then((result: any) => {
          console.log(result);
          if(result == "Success"){
          //Fingerprint/Face was successfully verified            
          //Go to dashboard
          this.setAndGet.UserName = this.data.userName;
          this.navCtrl.setRoot("DashboardPage")
          }
          else {
          //Fingerprint/Face was not successfully verified                      
            this.utility.presentAlert(result);
            console.log(result);
          }
        })
        .catch((error: any) => {
          //Fingerprint/Face was not successfully verified          
          this.utility.presentAlert(error);
          console.log(error);
        });
      }
      else {
        //Fingerprint or Face Auth is not available        
        this.utility.presentAlert("Fingerprint/Face Auth is not available on this device!");
        console.log("Fingerprint/Face Auth is not available on this device!")
      }
    })
    }
  }

  // login(){
  //         this.setAndGet.UserName = this.data.userName;
  //         this.navCtrl.setRoot("DashboardPage");
  // }

}
