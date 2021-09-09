import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users:any=[];

 
  constructor(private router:Router,
    private userService:UserService) { }

  ngOnInit(): void {
    // this.users=[
    //   {id:1, firstName:'slimen', lastName:'jemi', email:'s@gamil.com', tel:'25147896',address:'aaaaaaaaa',img:'assets/img/client/client_1.png'},
    //   {id:2, firstName:'seif', lastName:'rezqui', email:'seif@gamil.com', tel:'25874123',address:'bbbbbbbbbb'},
    //   {id:3, firstName:'amine', lastName:'jemi', email:'a@gamil.com', tel:'25879637',address:'cccccccccc'},
    //   {id:4, firstName:'taher', lastName:'timoumi', email:'t@gamil.com', tel:'25879639',address:'dddddddddd'},
    //   {id:5, firstName:'hela', lastName:'haloula', email:'h@gamil.com', tel:'25879635',address:'eeeeeeeeeee'},
  
    // ];
    // this.users= JSON.parse(localStorage.getItem('users')||'[]');
    this.userService.getAllUsers().subscribe(
      (data)=>{
        this.users = data.allUsers;
      }
    );
  }
  goToDisplay(id:number){
    // alert("btn clicked" +id);
    this.router.navigate([`displayUser/${id}`]);
  }
  deleteUser(id:number){
    // this.users.splice(pos,1);
    // localStorage.setItem('users',JSON.stringify(this.users));
    this.userService.deleteUserById(id).subscribe(
      (data) => {
        console.log('Result from BE', data.message);
        this.userService.getAllUsers().subscribe(
          (data)=>{
            this.users = data.allUsers;
          }
        );
      }
    );
  }
  goToEditUser(id:number){
    // alert("btn clicked" +id);
    this.router.navigate([`editUser/${id}`]);
  }

  

}
