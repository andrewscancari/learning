import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { iPokemonList } from './pokemon-list.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PokemonApiService } from '../pokemon-api.service';

@Injectable({  providedIn: 'root' })
export class DashboardResolver implements Resolve<iPokemonList> {
  constructor(private pokemonApiService: PokemonApiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<iPokemonList> {
    const paramPage: number = (() => {
      let p: number = route.queryParams.page || 1;
      p = p < 1 ? 1 : p;

      return p;
    })();

    const paramSize: number = (() => {
      let size = route.queryParams.size || 10;

      size = size < 1 ? 1 : size;
      size = size > environment.maxPageSize ? environment.maxPageSize : size;

      return size;
    })();

    return this.pokemonApiService.pokemonList(paramPage, paramSize);
  }
}
