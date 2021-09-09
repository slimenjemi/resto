import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { platformBrowser } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {

  // form id: import groupe
  chefForm!: FormGroup;
  // object
  chef: any = {};
  id: any;
  title!: string;
  constructor(private formBuilder: FormBuilder, private activedRouter: ActivatedRoute,
    private router: Router, private chefService: ChefService) { }

  ngOnInit(): void {
    this.id = this.activedRouter.snapshot.paramMap.get('id');
    if (this.id) {
      this.title = 'Edit'
      // alert('here into edit');
      // this.chef = this.searchChef();
      this.chefService.getChefById(this.id).subscribe(
        (data) => {
          console.log(data);
          this.chef = data.chef;
        }
      );

    } else {
      // alert('here into add');
      this.title = 'Add'

    }
    this.chefForm = this.formBuilder.group(
      {
        name: [''],
        speciality: [''],
        note: ['']


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

  addEditChef() {
    if (this.id) {
      //Edit
      //      
      this.chefService.updateChef(this.chef).subscribe(
        (data) => {
          console.log('here after update',data.message);
        }
      );
      this.router.navigate(['admin']);


    }
    else {
      //Add
      // let idChef=JSON.parse(localStorage.getItem('idChef')||'1');
      // this.chef.id=idChef;
       this.chef.entryDate = new Date();
      // let chefs = JSON.parse(localStorage.getItem('chefs')|| '[]');
      // chefs.push(this.chef);
      // localStorage.setItem('chefs',JSON.stringify(chefs));
      // localStorage.setItem('idChef',idChef+1);

      console.log('Here object', this.chef);
      this.chefService.addChef(this.chef).subscribe(
        (data) => {
          console.log('Data after save', data.message);
        }
      );
      this.router.navigate(['admin']);

    }

  }



}
