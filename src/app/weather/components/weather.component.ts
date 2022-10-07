import { Component, OnInit } from '@angular/core';
import { Weather } from '../models/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: Weather={
    feelsLikeInF: 88,
    condition: "humid"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
