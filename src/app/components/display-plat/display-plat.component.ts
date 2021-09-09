import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-display-plat',
  templateUrl: './display-plat.component.html',
  styleUrls: ['./display-plat.component.css']
})
export class DisplayPlatComponent implements OnInit {

  id: any;
  plat: any;
  constructor(private activedRouter: ActivatedRoute,
    private platService:PlatService) { }

  ngOnInit(): void {
    this.id = this.activedRouter.snapshot.paramMap.get('id');
    // alert(this.id);
    // this.plat = this.searchPlat();
    this.platService.getPlatById(this.id).subscribe(
      
        (data)=>{
          this.plat = data.plat;
      }
    );

  }
  // searchPlat() {
  //   let plats = JSON.parse(localStorage.getItem('plats') || '[]');
  //   let searchPlat = {};
  //   for (let i = 0; i < plats.length; i++) {
  //     if (plats[i].id == this.id) {
  //       searchPlat = plats[i];
  //       break;

  //     }
  //   }
  //   return searchPlat;
  // }
  

}
