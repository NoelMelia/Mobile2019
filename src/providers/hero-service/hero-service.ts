import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Md5 } from "ts-md5/dist/md5";

/*
  Generated class for the HeroService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HeroService {
  data: any;
  constructor(public http: Http) {
    console.log("Hello HeroService");
  }

  load() {
    return new Promise(resolve => {
      let md5 = new Md5();

      var timestamp = Number(new Date());
      var hash = Md5.hashStr(
        timestamp +
          "4b751bb186ce7b8f405e5479f4c411ddbd8187c3b9c939595576fe55b123b0aab9fc8e15"
      );

      this.http
        .get(
          `https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=75&ts=${timestamp}&apikey=b9c939595576fe55b123b0aab9fc8e15&hash=${hash}`
        )       
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getDescription(id: number) {
    return new Promise(resolve => {
      let md5 = new Md5();

      var timestamp = Number(new Date());
      var hash = Md5.hashStr(
        timestamp +
          "4b751bb186ce7b8f405e5479f4c411ddbd8187c3b9c939595576fe55b123b0aab9fc8e15"
      );

      this.http
        .get(
          `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${timestamp}&apikey=b9c939595576fe55b123b0aab9fc8e15&hash=${hash}`
        )
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
