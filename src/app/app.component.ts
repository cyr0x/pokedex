import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {throwError} from "rxjs/index";
import {map} from "rxjs/internal/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokeapi-get';
  constructor(private http: HttpClient) {}

  rootUrl:string = 'https://pokeapi.co/api/v2/pokemon/';
  value: string;
  response: any;
  found: boolean = false;
  imgUrl: string;
  pokeTypes: any[];
  pokemon: any;


  getPost() {
    this.response = this.http.get(this.rootUrl + this.value.toLowerCase() + '/').pipe(map(data => {
      if(data === null) return throwError("null data");
      return data;
    }));
    this.response.subscribe((response) => {
      this.pokemon = response;
      this.pokeTypes = response.types;
      this.found = true;
      this.imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.pokemon.id + ".png";
      console.log("Got response");
      console.error();
    });
  }
}

