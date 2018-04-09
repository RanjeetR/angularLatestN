import { Component, OnInit } from '@angular/core';
import { SharedDataServiceService } from '../../services/shared-data-service.service';

@Component({
  selector: 'app-weekly-menu',
  templateUrl: './weekly-menu.component.html',
  styleUrls: ['./weekly-menu.component.scss']
})
export class WeeklyMenuComponent implements OnInit {
private tempDish;
private week;
private totalCost: number = 0;
private msg:string = ''
constructor(private sharedDataService: SharedDataServiceService) { }
  onChange(evt, dish) {
    console.log('selected', evt,dish);
    this.week.forEach(elm => {
      if(elm.day === evt.value ) {
        elm.selected = 'true'
      } 
    })
    // add cost to total cost
    this.totalCost = this.totalCost + parseInt(dish.price);
  }
  checkout():void {
    // show modal pop here

     alert ('Thank you, your total cost is' +  this.totalCost);
  }
  ngOnInit() {
    this.tempDish = this.sharedDataService.getAllDishes();

    // fail check if we reload so we will not loose object
    if(!this.tempDish.length) {
      let tDish = localStorage.getItem('storedDishes')
      this.tempDish = JSON.parse(tDish)    
    }
    this.week = [
      {
        "day":"Monday",
        "selected":"false"
      },
      {
        "day":"Tuesday",
        "selected":"false"
      },
      {
        "day":"Wednesday",
        "selected":"false"
      },
      {
        "day":"Thursday",
        "selected":"false"
      },
      {
        "day":"Friday",
        "selected":"false"
      },
      {
        "day":"Saturday",
        "selected":"false"
      },
      {
        "day":"Sunday",
        "selected":"false"
      }

    ]   
  }

}
