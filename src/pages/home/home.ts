import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { HeroService } from '../../providers/hero-service/hero-service';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = '';
  email = '';
  public obj: any;
  public heroes: any;
  constructor( private navCtrl: NavController, 
    private auth: AuthService,
    public heroService: HeroService) {
    // let info = this.auth.getUserInfo();
    // this.username = info['username'];
    // this.email = info['email'];
    this.getAllHeroes();
  }
  getAllHeroes() {
    this.heroService.load()
      .then(data => {
        this.obj = data;
        this.heroes = this.obj.data.results;
      });
  }

  getDescription(id:number){
    console.log(id);
    this.navCtrl.push("DescriptionPage", {
      id: id
    })
  }
  }

