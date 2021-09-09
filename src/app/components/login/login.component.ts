import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // form id: import groupe
  userForm!: FormGroup;
  // object
  user: any = {};
  usersearch: any;
  msg!: string;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group(
      {
        email: [''],
        pwd: ['']

      }
    );
  }
  login() {
    console.log('here the User object', this.user);
    this.userService.login(this.user).subscribe(
      (data) => {
        console.log('Data from BE', data.message);
        console.log('User object after login from BE', data.connectedUser);
        //message 0 or 1: error message:Email/pwd incorrect
        // message 2 : if role ='user' => home else admin
        this.usersearch = data.connectedUser;
        if (data.message == '2') {
          
          this.msg = ''
          if (this.usersearch.role == 'user') {
            console.log('welcome', this.usersearch.fName,' ',this.usersearch.lName);
            
            localStorage.setItem('connectedUser', JSON.stringify(data.connectedUser));

            this.router.navigate(['']);
            alert('hello'+this.usersearch.fName+this.usersearch.lName);
          } else {
            console.log('welcome', this.usersearch.fName,'',this.usersearch.lName);
            this.router.navigate(['admin']);
            alert('hello'+this.usersearch.fName +' '+ this.usersearch.lName);


          }
        }
        else {
          this.msg = 'Email and pwd incorrect'
        }

      }
    );

    // this.router.navigate(['']);
  }

}
