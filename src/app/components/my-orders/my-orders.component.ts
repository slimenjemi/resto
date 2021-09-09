import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  id: any ;
  orders: any ;

  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
   
    this.id = localStorage.getItem('connectedUser');
    console.log('id', this.id);
    
    this.orderService.getUserOrders(this.id).subscribe(
      (data) => {
        this.orders = data.myOrders;
        console.log('orders',this.orders);
        
      }
    );
  }
  deleteOrder(id: number) {
     this.id = localStorage.getItem('connectedUser');
    console.log('id', this.id);
    this.orderService.deleteOrderById(id).subscribe(
      (data) => {
        console.log('Result from BE', data.message);
        this.orderService.getUserOrders(this.id).subscribe(
          (data)=>{
            this.orders = data.myOrders;
            console.log('orders',this.orders);

          }
        );
      }
    );
  }


}
