import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //{id,name,description,price}
  //passer des données de parents a son cild
  @Input() menuInput:any;
  constructor() { }

  ngOnInit(): void {
  }

  priceColor(price:number){
    if (price>25) {
      return 'red';
      
    } else if(price<=25 && price>=15){
      return 'orange';

    } else{
      return 'green';

    }
  }
}
