import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

 // form id: import groupe
 weatherForm!: FormGroup;
 // object
 weather: any = {};
 findedWeather: any;
 constructor(private formBuilder: FormBuilder,
   private router: Router, 
   private weatherService: WeatherService) { }

 ngOnInit(): void {
   //  this.id = this.activedRouter.snapshot.paramMap.get('id');

   this.weatherForm = this.formBuilder.group(
     {
       city: ['']
     }
   );
 }


 searchCity() {
   console.log(' here City', this.weather);
    this.weatherService.getWeatherByCity(this.weather).subscribe(

     (data) => {
       console.log('here finded weather', data.result);
       this.findedWeather=data.result;
     });

  //  //     // this.router.navigate(['admin']);


 }


}
