import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-admin-chefs',
  templateUrl: './admin-chefs.component.html',
  styleUrls: ['./admin-chefs.component.css']
})
export class AdminChefsComponent implements OnInit {
  chefs:any=[];

  

  constructor(private router:Router,
    private chefService:ChefService) { }

  ngOnInit(): void {

      // this.chefs=[
      //   {id:1, name:'slimen', speciality:'Chef patissier',img:'assets/img/team/chefs_1.png'},
      //   {id:2, name:'seif', specialite:'chef cuisinier', img:'assets/img/team/chefs_2.png'},
      //   {id:3, name:'amine', specialite:'chef patissier',img:'assets/img/team/chefs_3.png'},
      //   {id:4, name:'ahmed', specialite:'chef cuisinier',img:'assets/img/team/chefs_1.png'},
      //   {id:5, name:'taher', specialite:'chef patissier',img:'assets/img/team/chefs_2.png'},

       
       
      //  ];
      // this.chefs= JSON.parse(localStorage.getItem('chefs')||'[]');
      this.chefService.getAllChefs().subscribe(
        (data)=>{
          this.chefs = data.allChefs;
        }
      );

  }
  goToDisplay(id:number){
    // alert("btn clicked" +id);
    this.router.navigate([`displayChef/${id}`]);
  }
  deleteChef(id:number){
    // 
    this.chefService.deleteChefById(id).subscribe(
      (data)=>{
        console.log('Result from BE', data.message);
        this.chefService.getAllChefs().subscribe(
          (data)=>{
            this.chefs = data.allChefs;
          }
        );
      }
      
    );
   
  }

  goToEditChef(id:number){
    // alert("btn clicked" +id);
    this.router.navigate([`editChef/${id}`]);
  }
  noteColor(note:number){
    if (note>=0 && note<5) {
      return ['red','Beginner'];
      ;
      
    } else if(note>=5 && note<9){
      return ['orange','Intermediate'];

    } else{
      return ['green','Pro'];
      ;

    }
  }
}
