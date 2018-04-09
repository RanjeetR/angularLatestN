import { Injectable } from '@angular/core';
import * as data from '../../data/user.json';
@Injectable()
export class FakeUserRegistrationService {

  static storedUser: any;
  static fakeUser = (<any>data);

  constructor() { }
  
  static createUser(){
    let tempUser = localStorage.getItem('fakeUser')
    this.storedUser = JSON.parse(tempUser)
   if (!this.storedUser) {
      localStorage.setItem('fakeUser', JSON.stringify(this.fakeUser.user).toString() )
    }
    console.log('user available', this.storedUser)
  }
}
