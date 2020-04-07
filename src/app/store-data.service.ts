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
    //Sparar namn till local storage som sträng


  }

  loadNames(): Name {
    let names: Name = JSON.parse(localStorage.getItem("UserNames")); 

    return names;
    //Hämtar namn som object

  }

  saveFood(foodChoice: string){
    
    let foodObj = {
      food: foodChoice
    }

    localStorage.setItem("saveFood", JSON.stringify(foodObj));
    //sparar senast valda mat till local storage
   
  }

  loadFood(){
    let userFood = JSON.parse(localStorage.getItem("saveFood"));

    return userFood;
    
  }


}


