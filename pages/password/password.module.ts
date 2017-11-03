import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { passwordPage } from './password';

@NgModule({
  declarations: [
    passwordPage,
  ],
  imports: [
    IonicPageModule.forChild(passwordPage),
  ],
})
export class PasswordPageModule {}
