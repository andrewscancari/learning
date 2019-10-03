import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { PokemonListObject } from './pokemon-list.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardService } from './dashboard.service';

@Injectable({  providedIn: 'root' })
export class DashboardResolver implements Resolve<PokemonListObject> {
  constructor(private dashboardService: DashboardService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PokemonListObject> {
    return this.dashboardService.pokemonList(1, 10);
  }
}
