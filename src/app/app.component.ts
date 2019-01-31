import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  notFound: boolean = false;
  imgUrl: string;
  pokeTypes: any[];
  pokemon: any;


  getPost() {
    this.response = this.http.get(this.rootUrl + this.value.toLowerCase() + '/');
    this.response.subscribe(
      response => {
        this.pokemon = response;
        this.pokeTypes = response.types;
        this.notFound = false;
        this.found = true;
        this.imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.pokemon.id + ".png";
        console.log("Got response");
        console.error();
      },
      error => {
        this.value = "";
        this.found = false;
        this.notFound = true;
        console.log('Error 404', error)
      }
    );
  }
}

