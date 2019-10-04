import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { iPokemonList } from './pokemon-list.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardService } from './dashboard.service';
import { environment } from './../../../environments/environment';

@Injectable({  providedIn: 'root' })
export class DashboardResolver implements Resolve<iPokemonList> {
  constructor(private dashboardService: DashboardService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<iPokemonList> {
    const paramPage: number = (() => {
      let p: number = route.queryParams.page || 1;
      p = p < 1 ? 1 : p;

      return p;
    })();

    const paramSize: number = (() => {
      let size = route.queryParams.size || 10;

      console.log(environment);

      size = size < 1 ? 1 : size;
      size = size > environment.maxPageSize ? environment.maxPageSize : size;

      return size;
    })();

    return this.dashboardService.pokemonList(paramPage, paramSize);
  }
}
