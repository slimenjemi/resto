import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id: any;
  user: any;
  constructor(private activedRouter: ActivatedRoute, private fb: FormBuilder,
    private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.id = this.activedRouter.snapshot.paramMap.get('id');
    // alert(this.id);
    // this.user = this.searchUser();
    this.userService.getUserById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.user = data.user;
      }
    );

  }
  searchUser() {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    let searchedUser = {};
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == this.id) {
        searchedUser = users[i];
        break;

      }
    }
    return searchedUser;
  }
  edit() {
    //     let users = JSON.parse(localStorage.getItem('users')|| '[]');
    //      for (let i = 0; i < users.length; i++) {
    // if(users[i].id==this.id)  {
    //   users[i].firstName=this.user.firstName;
    //   users[i].lastName=this.user.lastName;
    //   users[i].email=this.user.email;
    // break;
    // }     
    //      }
    //     localStorage.setItem('users',JSON.stringify(users));
    //     this.router.navigate(['admin']);
    this.userService.updateUser(this.user).subscribe(
      (data) => {
        console.log('Data from BE', data.message);
      }
    );
    this.router.navigate(['admin']);

  }
}
