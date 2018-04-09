import { Component, OnInit } from '@angular/core';
import { SharedDataServiceService } from '../../services/shared-data-service.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss']
})
export class UserpageComponent implements OnInit {
  private tempDish;
  constructor(private sharedDataService: SharedDataServiceService) { }

  ngOnInit() {
    this.tempDish = this.sharedDataService.getAllDishes();

    if(!(this.tempDish && this.tempDish.length)) {
      let tDish = localStorage.getItem('storedDishes')
      this.tempDish = JSON.parse(tDish)    
    }
}
}