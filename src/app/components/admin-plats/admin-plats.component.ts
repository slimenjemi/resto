import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-admin-plats',
  templateUrl: './admin-plats.component.html',
  styleUrls: ['./admin-plats.component.css']
})
export class AdminPlatsComponent implements OnInit {

  plats: any = [];


  constructor(private router: Router,
    private platService: PlatService) { }

  ngOnInit(): void {
    // this.plats=[
    //   {id:1, name:'conscous', price:'8', description:'aaaaaaaa', img:'assets/img/food_menu/single_food_1.png'},
    //   {id:2, name:'ojja', price:'8', description:'aaaaaaaa', img:'assets/img/food_menu/single_food_2.png'},
    //   {id:3, name:'plat tunisien', price:'8', description:'aaaaaaaa', img:'assets/img/food_menu/single_food_3.png'},
    //   {id:4, name:'malfouf', price:'8', description:'aaaaaaaa', img:'assets/img/food_menu/single_food_4.png'},
    //   {id:5, name:'makloub', price:'8', description:'aaaaaaaa', img:'assets/img/food_menu/single_food_5.png'},

    // ];
    // this.plats= JSON.parse(localStorage.getItem('plats')||'[]');
    this.platService.getAllPlats().subscribe(
      (data) => {
        this.plats = data.allPlats;
      }
    );
  }
  goToDisplay(id: number) {
    // alert("btn clicked" +id);
    this.router.navigate([`displayPlat/${id}`]);
  }
  deletePlat(id: number) {
    // this.plats.splice(pos,1);
    // localStorage.setItem('plats',JSON.stringify(this.plats));
    this.platService.deletePlatById(id).subscribe(
      (data) => {
        console.log('Result from BE', data.message);
        this.platService.getAllPlats().subscribe(
          (data)=>{
            this.plats = data.allPlats;
          }
        );
      }
    );
    
  }
  goToEditPlat(id: number) {
    // alert("btn clicked" +id);
    this.router.navigate([`editPlat/${id}`]);
  }

}
