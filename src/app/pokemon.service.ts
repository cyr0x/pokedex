import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './models/pokemon.model';

@Injectable()
export class PokemonService {
    private url: string = 'https://pokeapi.co/api/v2/pokemon/1/';

    constructor(private http: HttpClient) { }

    getPokemon(): Observable<Pokemon> {
        return this.http.get<Pokemon>(this.url);
    }
}