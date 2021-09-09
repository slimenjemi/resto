import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  addArticleForm!:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.addArticleForm=this.formBuilder.group(
      {// firstName: required, au moins 5 chars
        title:['', [Validators.required, Validators.minLength(5)]],
        //lastName : required, au moins 3 chars
        content:[''],
       //email : format Eamil,required
        date:[''],
        category:[''],
       

      }
    );
  }
  addArticle(){
    console.log('here the User object', this.addArticleForm.value);

  }


}
