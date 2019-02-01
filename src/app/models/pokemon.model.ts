import { PokemonType } from './pokemontype.model';
import { PokemonSpecies } from './pokemonspecies.model'


export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: PokemonType;
    species: PokemonSpecies;
}