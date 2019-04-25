import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Md5 } from "ts-md5/dist/md5";


@Injectable()
export class HeroService {
  data: any;
  constructor(public http: Http) {
    
  }
//Calling the api and getting the deatils for the homepage page 
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
  //Calling the api and getting the deatils for the decription page 
  getDescription(id: number) {
    return new Promise(resolve => {
      let md5 = new Md5();
      //I found getting all this details very hard to get working.Between the timestamp getting the current date and hash
      //It was all a bit over my head but i got it working in the end
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
