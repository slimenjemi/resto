import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-dishes',
  templateUrl: './popular-dishes.component.html',
  styleUrls: ['./popular-dishes.component.css']
})
export class PopularDishesComponent implements OnInit {
//declaration d'une variable
//variable globale de type any nomée menus
//nom variable: typeVaraible=valeurVariable;
menus: any=[];

y: string='slimen';
z:boolean=false;
user:any={id: 1, firstName:'slimen'};

  // methode predefinie
//la creation des instances(des objets)
  constructor() { }
//methode predéfinie qui permet d'exécuter le code automatiquement
  ngOnInit(): void {
    //affectation de 5 objects dans la variable menus
    // dans le futur, ces objets vont etre recupéres de la DB
 this.menus=[
 {id:1, name:'couscous', price:15, description:'plat tunisien'},
 {id:2, name:'Ojja', price:8, description:'plat tunisien'},
 {id:3, name:'Ma9loub', price:16, description:'plat tunisien'},
 {id:4, name:'Kafteji', price:26, description:'plat tunisien'},
 {id:5, name:'plat Tunisien', price:6, description:'plat tunisien'},


];

}
}
