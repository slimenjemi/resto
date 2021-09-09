import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // form id: import groupe
  searchForm!: FormGroup;
  // object
  chef: any = {};
  findedChefs: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router, private chefService: ChefService) { }

  ngOnInit(): void {
    //  this.id = this.activedRouter.snapshot.paramMap.get('id');

    this.searchForm = this.formBuilder.group(
      {
        speciality: ['']
      }
    );
  }
  // searchChef() {
  //   let chefs = JSON.parse(localStorage.getItem('chefs') || '[]');
  //   let searchedChef = {};
  //   for (let i = 0; i < chefs.length; i++) {
  //     if (chefs[i].id == this.id) {
  //       searchedChef = chefs[i];
  //       break;

  //     }
  //   }
  //   return searchedChef;
  // }

  searchChef() {
    console.log('Speciality', this.chef);
    this.chefService.getChefBySpeciality(this.chef).subscribe(

      (data) => {
        //     this.chef = data.chef;
        console.log('here finded chefs', data.findedchefs);
        this.findedChefs=data.findedchefs;
      });

    //     // this.router.navigate(['admin']);


  }






}
