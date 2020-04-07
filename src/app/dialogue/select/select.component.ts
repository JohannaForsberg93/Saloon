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
  //Förväntar sig ett värde från en dialogue-component, som skickas in från parent template [] hit. Här tar vi värdet som i detta fall är en boolean och ändrar den till true.  

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
    //Sparar till local storage
    this.foodChoice = true; 
    //Villkor för att 
    this.foodSelected.emit(this.food);
    
    console.log("SaveFood-funktionen från select-component körs nu")
  }

  

}
