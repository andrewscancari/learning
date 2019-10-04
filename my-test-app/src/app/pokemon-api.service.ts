import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iPokemonList } from './dashboard/pokemon-list.interface';
import { HttpParams, HttpClient } from '@angular/common/http';
import { iPokemonData } from './dashboard/pokemon-data.interface';

const API = 'https://pokeapi.co/api/v2/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor(private httpClient: HttpClient) { }

  pokemonList(page: number, size: number): Observable<iPokemonList> {
    const params = new HttpParams().set('offset', ((page - 1) * size).toString()).set('limit', size.toString());

    return this.httpClient.get<iPokemonList>(`${API}`, { params });
  }

  pokemonData(pokemon: iPokemonData) {
    return this.httpClient.get<iPokemonData>(pokemon.url);
  }
}
