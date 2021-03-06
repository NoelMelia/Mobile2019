import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = { username: '', password: '' };
  savename :string;
    savepass :string;
  constructor(public storage:Storage, 
    public navCtrl: NavController,
    private auth: AuthService, 
    private alertCtrl: AlertController) {
  }
  //Creating the new details and checking that they are valid
  public register() {
    this.auth.register(this.registerCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup("Success", "Account created.");
        
        //Storing the name in Storage
        this.storage.set('registerCredentials',this.registerCredentials);
        console.log(this.registerCredentials.username,this.registerCredentials.password);
        
      } else {
        this.showPopup("Error", "Problem creating account.");
      }
    },
      error => {
        this.showPopup("Error", error);
      });
  }
 //Pop for testing but i left it in just incase for future workings on the project
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              
              this.navCtrl.push(HomePage);
            }
          }
        }
      ]
    });
    alert.present();
  }

}