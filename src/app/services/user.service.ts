import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL:string='http://localhost:3000/users';

  constructor( private http:HttpClient) { }
  
  getAllUsers(){
    return this.http.get<{allUsers:any}>(this.userURL);
  }
  getUserById(id:number){
    return this.http.get<{user:any}>(`${this.userURL}/${id}`);


  }
 
  signup(user:any){
    return this.http.post<{message:string}>(`${this.userURL}/signup`, user);

  }
  login(user:any){
    return this.http.post<{message:string,connectedUser:any}>(`${this.userURL}/login`, user);
  }
  deleteUserById(id:number){

    return this.http.delete<{message:string}>(`${this.userURL}/${id}`);

  }
 updateUser(user:any){
    return this.http.put<{message:string}>(`${this.userURL}/${user._id}`, user);

  }
 
}
