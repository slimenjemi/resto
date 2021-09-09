import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/validators/confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  url!: string;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.url = this.router.url;
    console.log('here url', this.url);

    this.signupForm = this.formBuilder.group(
      {// firstName: required, au moins 5 chars
        firstName: ['', [Validators.required, Validators.minLength(5)]],
        //lastName : required, au moins 3 chars
        lastName: ['', [Validators.required, Validators.minLength(3)]],
        //email : format Eamil,required
        email: ['', [Validators.required, Validators.email]],
        // 8 chars
        tel: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
        // required entre 6 et 12 chars
        pwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
        confirmPwd: [''],


      },
      {
        validator: MustMatch('pwd', 'confirmPwd')
      }
    );
  }
  signup() {
    if (this.url == '/signup') {
      this.signupForm.value.role = 'user';
    } else {
      this.signupForm.value.role = 'admin';

    }
    // alert('signup clicked');
    // let idUser=JSON.parse(localStorage.getItem('idUser')||'1');
    // this.signupForm.value.id=idUser;
    // let users = JSON.parse(localStorage.getItem('users')|| '[]');
    // users.push(this.signupForm.value);
    // localStorage.setItem('users',JSON.stringify(users));
    // localStorage.setItem('idUser',idUser+1);
    // this.signupForm.value:// .value: pour retourner l'ensemble des inputs
    // console.log('here the User object',this.signupForm.value);
    console.log('Here object', this.signupForm.value);
    this.userService.signup(this.signupForm.value).subscribe(
      (data) => {
        console.log('Data from BE', data.message);
      }
    );
    this.router.navigate(['']);


  }

}
