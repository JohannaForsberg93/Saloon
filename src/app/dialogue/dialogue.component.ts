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

  //ngOnInit körs varje gång man laddar om sidan
  ngOnInit(): void { 
    this.names = this.storeDataService.loadNames()
    console.log(this.names);

    this.userFood = this.storeDataService.loadFood()
  }

  saveNames() {
    this.storeDataService.saveNames(this.firstNameInput, this.lastNameInput) 
    //funktion som hämtar funktion i service som sparar namnen
    this.greet = true;
    
  }

  keyUpFirstName(event) {
    this.firstNameInput = event.target.value;
    //funktion som sparar förnamnet till firstNameInput
    
  }

  keyUpLastName(event) {
    this.lastNameInput = event.target.value; // Samma. event.target hämtar elementet händelsen sker vid, .value = user input
  }

  handleFoodSelected(food) {
    this.userFood = food; //userFood får värde från child-component
    this.foodBool = true; //Om userFood innehåller något så visas text
    console.log(this.userFood, "Nu körs handleFoodSelected-funktionen från dialog-component. userFood får sitt värde från local storage.")
  }

  theUsual(){
    if(this.userFood == null){  
      this.usualIsNull = true;
    }

    else{
        this.usual = true;
    }
    
  }
  // =   assignment, tilldela en variabel ett värde
  // ==  jämföra två värden, ex. i en if-sats
  // === jämföra två värden utan typkonvertering


  removeFunction(){
    localStorage.removeItem("UserNames");
    localStorage.removeItem("saveFood");
    this.clearUserBool = true;

  }


}

