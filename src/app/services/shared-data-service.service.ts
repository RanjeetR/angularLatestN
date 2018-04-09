import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataServiceService {
  public allDishes = [];
  public localDbStoredDishes: any = '';
  private storedDishes;

  constructor() { }
  addDish(dish) {
    console.log('here in service', dish);
    this.allDishes.push(dish);

    let tempUser = localStorage.getItem('storedDishes')
    this.storedDishes = JSON.parse(tempUser)
  
      localStorage.setItem('storedDishes', JSON.stringify(this.allDishes).toString() )

    console.log('user available', tempUser)
  }
  getAllDishes(){
    return this.allDishes;

  }
}
