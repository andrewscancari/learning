import { iPokemonData } from './pokemon-data.interface';

export interface iPokemonList {
  count: number;
  next: string;
  previous: string;
  results: iPokemonData[];
}
