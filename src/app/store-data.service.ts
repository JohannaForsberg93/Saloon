import { Injectable } from '@angular/core';
import { Name } from './name';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {

  constructor() { 
  }

  saveNames(firstName: string, lastName: string){

    let nameObj: Name = { 
      firstname: firstName,
      lastname: lastName
    };
    
    localStorage.setItem("UserNames", JSON.stringify(nameObj)); 
  }

  loadNames(): Name {
    let names: Name = JSON.parse(localStorage.getItem("UserNames")); 
    return names;
  }

  saveFood(foodChoice: string){
    let foodObj = {
      food: foodChoice
    }

    localStorage.setItem("saveFood", JSON.stringify(foodObj));
  }

  loadFood(){
    let userFood = JSON.parse(localStorage.getItem("saveFood"));
    return userFood;
  }
}


