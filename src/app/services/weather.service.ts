import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherURL:string='http://localhost:3000/weather';

  constructor( private http:HttpClient) { }
  
  
  getWeatherByCity(weather:any){
    return this.http.post<{result:any}>(`${this.weatherURL}`,weather);
  }
}
