import { Component, OnInit } from '@angular/core';
import { map, timeout, count } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { PokemonListObject } from '../pokemon-list.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DasbhoardComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver, private httpClient: HttpClient) {}

  pokemonList: [] = null;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if(this.pokemonList) {
        if (matches) {
          return [
            { title: 'Card 1', cols: 2, rows: 1 },
            { title: 'Card 2', cols: 2, rows: 1 },
            { title: 'Card 3', cols: 2, rows: 1 },
            { title: 'Card 4', cols: 2, rows: 1 }
          ];
        }

        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return null;
    })
  );


  getPokemonList(): Observable<PokemonListObject> {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20') as Observable<PokemonListObject>;
  }

  ngOnInit() {
    this.pokemonList = [];
    this.getPokemonList().subscribe(resPokemon => {
      console.log(resPokemon);
    });
  }
}
