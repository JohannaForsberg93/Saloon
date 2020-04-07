import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{ StoreDataService } from '../../store-data.service'

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  
  food: string;
  foodChoice: boolean = false;
  @Input() showFood: boolean = true;

  @Output() foodSelected = new EventEmitter<string>(); 

  constructor(private storeDataService: StoreDataService) { }

  ngOnInit(): void {
  }

  chooseFood(event) {
    this.food = event.target.value;
    console.log(this.food)
    this.saveFood();
  }
  saveFood(){
    this.storeDataService.saveFood(this.food)
    this.foodChoice = true; 
    this.foodSelected.emit(this.food);
  }

  

}
