import { Component, OnInit } from '@angular/core';
import { SharedDataServiceService } from '../../services/shared-data-service.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
 
})
export class AdminpageComponent implements OnInit {
  private imgUrl:string = '';
  private dishName:string = '';
  private price:number = 0;
  private counter:number = 0;
  private allDishes = [];
  constructor(private sharedDataService: SharedDataServiceService) { }

  ngOnInit() {
  }
  saveItem(){
    console.log('save',this)
    Object.assign({},)
    let singleDish = new DishModel(this.dishName,this.price,this.imgUrl)
    this.allDishes.push(singleDish);
    this.dishName = '';
    this.imgUrl = '';
    this.price = 0;
    this.counter = this.allDishes.length || 0 ;

    // call service to save object
    this.sharedDataService.addDish(singleDish);

    
  }
}
class DishModel {
  dishName: string;
  price:number;
  imgUrl : String;
  constructor(dish: string, price:number, url: string) {
      this.dishName = dish;
      this.price = price;
      this.imgUrl = url;
  }
}

