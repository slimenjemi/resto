import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
// backend URL
  chefURL:string='http://localhost:3000/chefs';

  constructor( private http:HttpClient) { }
  
  getAllChefs(){
    return this.http.get<{allChefs:any}>(this.chefURL);
  }
  getChefById(id:number){
    return this.http.get<{chef:any}>(`${this.chefURL}/${id}`);


  }
  deleteChefById(id:number){

    return this.http.delete<{message:string}>(`${this.chefURL}/${id}`);

  }
  addChef(chef:any){
    return this.http.post<{message:string}>(this.chefURL, chef);

  }
  updateChef(chef:any){
    return this.http.put<{message:string}>(`${this.chefURL}/${chef._id}`, chef);

  }
  getChefBySpeciality(speciality:any){
    return this.http.post<{findedchefs:any}>(`${this.chefURL}/search`,speciality);
  }
}
