import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
/*
  Generated class for the AuthServiceProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export class User {
  name: string;
  pass: string;
 
  constructor(name: string, pass: string,public storage:Storage) {
    this.name = name;
    this.pass = pass;
  }
}
 
@Injectable()
export class AuthService {
  constructor(public storage:Storage){}
  currentUser: User;
 //Getting the login details and confirming that they are correct
  public login(credentials) {
    if (credentials.username === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.username === "user" && credentials.password === "pass");
        
        observer.next(access);
        observer.complete();
      });
    }
  }
 //Same with register as login
  public register(credentials) {
    if (credentials.username === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
        this.storage.set('status',this.currentUser);
        console.log(this.currentUser);
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
  
  
}