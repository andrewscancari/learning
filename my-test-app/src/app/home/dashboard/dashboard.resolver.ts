import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { iPokemonList } from './pokemon-list.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardService } from './dashboard.service';

@Injectable({  providedIn: 'root' })
export class DashboardResolver implements Resolve<iPokemonList> {
  constructor(private dashboardService: DashboardService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<iPokemonList> {
    return this.dashboardService.pokemonList(1, 10);
  }
}
