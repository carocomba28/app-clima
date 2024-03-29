import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: any;
  ciudad: string = '';
  apiKey: string = 'a7a9c43c93a30d6faf5f7083defde981';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  getWeatherData() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad}&appid=${this.apiKey}&lang=es&units=metric`;
    this.http.get(url).subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }
}
