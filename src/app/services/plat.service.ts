import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  platURL:string='http://localhost:3000/plats';

  constructor( private http:HttpClient) { }
  
  getAllPlats(){
    return this.http.get<{allPlats:any}>(this.platURL);
  }
  getPlatById(id:number){
    return this.http.get<{plat:any}>(`${this.platURL}/${id}`);


  }
  deletePlatById(id:number){

    return this.http.delete<{message:string}>(`${this.platURL}/${id}`);

  }
  addPlat(plat:any){
    return this.http.post<{message:string}>(this.platURL, plat);

  }
  updatePlat(plat:any){
    return this.http.put<{message:string}>(`${this.platURL}/${plat._id}`, plat);

  }
}
