import { Component } from "@angular/core";
import { Http , Response } from '@angular/http';

@Component({
  
  selector: "app-root", 
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

@Component(
  {
    selector : "giphy",
    template: `
      <div>
          Awesome content right here!
      </div>
    `
  }
)

export class AppComponent {
  title = "Welcome to GiphySearch";
  link = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=";
  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  performSearch(searchTerm: HTMLInputElement): void {
    var apiLink = this.link + searchTerm.value;

    this.http.request(apiLink).subscribe((res: Response) => {
      console.log(res.json());
    });
  }
}