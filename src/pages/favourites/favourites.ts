import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { DescriptionPage } from '../description/description';

//I was going to display an image and name of each character that was favourite
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {

  public favourites: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
   ) {
   
  }

  characterDetails(id: number) {
    this.navCtrl.push(DescriptionPage, {id: id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

}