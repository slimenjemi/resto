import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {
  articles: any=[];
  
  constructor() { }

  ngOnInit(): void {
    this.articles=[
      {id:1, title:'slimen', content:'Chef patissier',date:'11/08/2021',img:'assets/img/blog/blog_1.png',category:'aaaa'},
      {id:2, title:'slimen', content:'Chef patissier',date:'11/08/2021',img:'assets/img/blog/blog_2.png',category:'bbbbbb'},
      {id:4, title:'slimen', content:'Chef patissier',date:'11/08/2021',img:'assets/img/blog/blog_3.png',category:'ccccc'},
      {id:4, title:'slimen', content:'Chef patissier',date:'11/08/2021',img:'assets/img/blog/blog_1.png',category:'dddddddd'},
     
     
     ];
  }

}
