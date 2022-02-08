import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public weather: any[] = [];

  constructor(@Inject(DOCUMENT) public document: Document,
  public auth: AuthService,
  private weatherService: WeatherService){
  }

  public getWeather() : void {
    this.weatherService.getWeather()
    .subscribe(weather => this.weather = weather);
  }
}
