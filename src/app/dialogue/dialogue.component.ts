import { Component, OnInit, Input, } from '@angular/core';
import{ StoreDataService } from '../store-data.service'
import { Name } from '../name';
import {Food } from '../food'
@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})

export class DialogueComponent implements OnInit {

  
  firstNameInput: string;
  lastNameInput: string;
  greet = false;
  userFood: Food;
  foodBool: boolean;
  names: Name;
  secondGreet: boolean = false;
  usual: boolean = false;
  clearUserBool: boolean = false;
  usualIsNull: boolean = false


  constructor(private storeDataService: StoreDataService) { }

  ngOnInit(): void { 
    this.names = this.storeDataService.loadNames()
    console.log(this.names);

    this.userFood = this.storeDataService.loadFood()
  }

  saveNames() {
    this.storeDataService.saveNames(this.firstNameInput, this.lastNameInput) 
    this.greet = true;
    
  }

  keyUpFirstName(event) {
    this.firstNameInput = event.target.value;
    
  }

  keyUpLastName(event) {
    this.lastNameInput = event.target.value;
  }

  handleFoodSelected(food) {
    this.userFood = food;
    this.foodBool = true; 
  }

  theUsual(){
    if(this.userFood == null){ 

      this.usualIsNull = true;
    }
    else {
      this.usual = true;
    }
  }
  removeFunction(){
    localStorage.removeItem("UserNames");
    localStorage.removeItem("saveFood");
    this.clearUserBool = true;

  }


}

