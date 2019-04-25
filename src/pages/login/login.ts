import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import {AuthService} from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };
  constructor(public navCtrl: NavController,
     private nav: NavController,
      private auth: AuthService,
       private alertCtrl: AlertController,
        private loadingCtrl: LoadingController) {
  }
  public createAccount() {
    this.nav.push('RegisterPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(HomePage, {
      item: item
    });
  }
  public login() {
    this.showLoading();
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      this.navCtrl.push(HomePage);
      
      if (allowed) {        
        
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    
  }
 
}