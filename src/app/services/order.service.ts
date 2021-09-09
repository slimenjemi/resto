import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderURL:string='http://localhost:3000/orders';

  constructor( private http:HttpClient) { }
  
  getUserOrders(id:number){
    return this.http.get<{myOrders:any}>(`${this.orderURL}/${id}`);
  }
 
  deleteOrderById(id:number){

    return this.http.delete<{message:string}>(`${this.orderURL}/${id}`);

  }
  addOrder(order:any){
    return this.http.post<{message:string}>(this.orderURL, order);

  }
  
}
