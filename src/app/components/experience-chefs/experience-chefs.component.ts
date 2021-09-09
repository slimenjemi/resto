import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-chefs',
  templateUrl: './experience-chefs.component.html',
  styleUrls: ['./experience-chefs.component.css']
})
export class ExperienceChefsComponent implements OnInit {
  chefs: any=[];

  constructor() { }

  ngOnInit(): void {
    this.chefs=[
      {id:1, name:'slimen', specialite:'Chef patissier',img:'assets/img/team/chefs_1.png'},
      {id:2, name:'seif', specialite:'chef cuisinier', img:'assets/img/team/chefs_2.png'},
      {id:3, name:'amine', specialite:'chef patissier',img:'assets/img/team/chefs_3.png'},
      {id:4, name:'ahmed', specialite:'chef cuisinier',img:'assets/img/team/chefs_1.png'},
     
     
     ];
     
  }

}
