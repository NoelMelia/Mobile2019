import { Component } from '@angular/core';

import { HeroService } from '../../providers/hero-service/hero-service';
import { NavController, NavParams } from 'ionic-angular';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // username = '';
  // password = '';
  public obj: any;
  public heroes: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,   
     
    public heroService: HeroService) {
    this.getAllHeroes();

  }
  //Getting the Hero or Character info from the Marvel api. It was difficult to get it working as it has a public and private key
  //Had also a hashkey and timestamp
  getAllHeroes() {
    this.heroService.load()
      .then(data => {
        this.obj = data;
        this.heroes = this.obj.data.results;
      });
  }
  
  //Creating the charcter id and going to the description page with info
  getDescription(id:number){
    console.log(id);
    this.navCtrl.push("DescriptionPage", {
      id: id
    })
    
  }
  
  
  
  }

