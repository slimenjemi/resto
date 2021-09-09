import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-edit-plat',
  templateUrl: './edit-plat.component.html',
  styleUrls: ['./edit-plat.component.css']
})
export class EditPlatComponent implements OnInit {

  id: any;
  plat: any;
  constructor(private activedRouter: ActivatedRoute, private fb: FormBuilder,
    private router: Router, private platService: PlatService) { }

  ngOnInit(): void {
    this.id = this.activedRouter.snapshot.paramMap.get('id');
    // alert(this.id);
    // this.plat = this.searchPlat();
    this.platService.getPlatById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.plat = data.plat;
      }
    );
  }
  // searchPlat() {
  //   let plats = JSON.parse(localStorage.getItem('plats') || '[]');
  //   let searchedPlat = {};
  //   for (let i = 0; i < plats.length; i++) {
  //     if (plats[i].id == this.id) {
  //       searchedPlat = plats[i];
  //       break;

  //     }
  //   }
  //   return searchedPlat;
  // }
  edit() {
    //     let plats = JSON.parse(localStorage.getItem('plats')|| '[]');
    //     for (let i = 0; i < plats.length; i++) {
    // if(plats[i].id==this.id)  {
    //  plats[i].name=this.plat.name;
    //  plats[i].description=this.plat.description;
    //  plats[i].price=this.plat.price;
    // break;
    // }     
    //     }
    //    localStorage.setItem('plats',JSON.stringify(plats));
    //    this.router.navigate(['admin']);
    this.platService.updatePlat(this.plat).subscribe(
      (data) => {
        console.log('here after update',data.message);
      }
    );
    this.router.navigate(['admin']);
  }


}
