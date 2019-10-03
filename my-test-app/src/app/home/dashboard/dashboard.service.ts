import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { PokemonListObject } from './pokemon-list.interface';
import { Observable } from 'rxjs';

const API = 'https://pokeapi.co/api/v2/pokemon';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  pokemonList(page: number, size: number): Observable<PokemonListObject> {
    const params = new HttpParams().set('offset', ((page - 1) * size).toString()).set('limit', size.toString());

    return this.httpClient.get<PokemonListObject>(`${API}`, { params });
  }
}
