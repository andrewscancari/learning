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
  cardCols = 1;

  constructor(private breakpointObserver: BreakpointObserver, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.pokemonList = this.activatedRoute.snapshot.data.pokemonList;

    /** Based on the screen size, switch from standard to one column per row */
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe( state => {
      if (state.matches) {
        this.cardCols = 2;
      } else {
        this.cardCols = 1;
      }
    });
  }
}
