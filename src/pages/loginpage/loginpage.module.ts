import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginpagePage } from './loginpage';

@NgModule({
  declarations: [
    LoginpagePage,
  ],
  imports: [
    IonicPageModule.forChild(LoginpagePage),
  ],
})
export class LoginpagePageModule {}
