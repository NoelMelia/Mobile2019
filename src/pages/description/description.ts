import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeroService } from '../../providers/hero-service/hero-service';
import { Hero } from '../../models/hero';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class DescriptionPage {
  //created objects and variables
  public id; 
  public obj: any;
  public hero: Hero;

  //Created constructor to get the info on the character for each selected
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public heroService: HeroService,
    public storage:Storage) {
    this.id = navParams.get("id");
    
    this.hero = new Hero();
    this.heroService.getDescription(this.id)
    .then(data => {
      this.obj = data;
      console.log(this.obj);
      this.hero.name = this.obj.data.results[0].name; 
      this.hero.thumb = this.obj.data.results[0].thumbnail.path +"."+ this.obj.data.results[0].thumbnail.extension;
      this.hero.description =  this.obj.data.results[0].description;
      //Printed out to the console for testing. Left it in
      this.storage.set('hero',this.hero.name);//Storing the name of the character
      console.log(this.hero.name);

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescriptionPage');
  }
  
}
