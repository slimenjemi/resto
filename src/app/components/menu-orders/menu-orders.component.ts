import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-menu-orders',
  templateUrl: './menu-orders.component.html',
  styleUrls: ['./menu-orders.component.css']
})
export class MenuOrdersComponent implements OnInit {

  menus: any = [];

  y: string = 'slimen';
  z: boolean = false;
  user: any = { id: 1, firstName: 'slimen' };
  idUser!:string;

  // methode predefinie
  //la creation des instances(des objets)
  constructor(private router: Router,
    private platService: PlatService,
    private orderService: OrderService) { }
  //methode predéfinie qui permet d'exécuter le code automatiquement
  ngOnInit(): void {
    //affectation de 5 objects dans la variable menus
    // dans le futur, ces objets vont etre recupéres de la DB
    //  this.menus=[
    //  {id:1, name:'couscous', price:15, description:'plat tunisien'},
    //  {id:2, name:'Ojja', price:8, description:'plat tunisien'},
    //  {id:3, name:'Ma9loub', price:16, description:'plat tunisien'},
    //  {id:4, name:'Kafteji', price:26, description:'plat tunisien'},
    //  {id:5, name:'plat Tunisien', price:6, description:'plat tunisien'},


    // ];
    this.platService.getAllPlats().subscribe(
      (data) => {
        this.menus = data.allPlats;
      }
    );

  }
  priceColor(price: number) {
    if (price > 25) {
      return 'red';

    } else if (price <= 25 && price >= 15) {
      return 'orange';

    } else {
      return 'green';

    }
  }
  Reserve(id:number) {

    this.idUser = localStorage.getItem('connectedUser') || '[]';
    console.log('idUser', this.idUser);
    let order = {
      idPlat: id,
      idUser: this.idUser



    }
    this.orderService.addOrder(order).subscribe(
      (data) => {
        console.log('result', data.message);


      }
    )

    this.router.navigate(['myOrders']);
  }
}
