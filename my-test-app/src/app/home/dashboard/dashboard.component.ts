import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { iPokemonList } from './pokemon-list.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DasbhoardComponent implements OnInit {
  pokemonList: iPokemonList;

  constructor(private breakpointObserver: BreakpointObserver, private activatedRoute: ActivatedRoute) {}

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
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
    })
  );


  ngOnInit(): void {
    this.pokemonList = this.activatedRoute.snapshot.data.pokemonList;
  }
}
