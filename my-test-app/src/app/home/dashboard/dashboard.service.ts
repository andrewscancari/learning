import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { iPokemonList } from './pokemon-list.interface';
import { Observable } from 'rxjs';
import { iPokemonData } from './pokemon-data.interface';

const API = 'https://pokeapi.co/api/v2/pokemon';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  pokemonList(page: number, size: number): Observable<iPokemonList> {
    const params = new HttpParams().set('offset', ((page - 1) * size).toString()).set('limit', size.toString());

    return this.httpClient.get<iPokemonList>(`${API}`, { params });
  }

  pokemonData(pokemon: iPokemonData) {
    return this.httpClient.get<iPokemonData>(pokemon.url);
  }
}
