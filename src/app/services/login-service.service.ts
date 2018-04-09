import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';


@Injectable()
export class LoginServiceService {

  
  constructor( private router: Router) {
   }


 validateUser(userName, password):any{
  // logic to validate user
  let userObj = this.fetchUsers()
  let matchUser = _.find(userObj,(obj)=>{
      return (obj.username === userName && obj.password === password)

  })
 if(matchUser) {
   if (matchUser.usertype === 'admin') {
    localStorage.removeItem('storedDishes');
    this.router.navigate(['./adminDashboard']);
   } else {
    this.router.navigate(['./userDashboard']);
   }
  
   console.log('login in successfull')
   
 } else {
   console.log('please check details')
 }
}
 fetchUsers():any {
  let s_user = JSON.parse( localStorage.getItem("fakeUser"))
  return s_user
}
}
