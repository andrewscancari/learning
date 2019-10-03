import { Directive, OnInit, Input } from '@angular/core';
import { iPokemonData } from './pokemon-data.interface';
import { DashboardService } from './dashboard.service';

@Directive({
  selector: '[appLoadPokemonData]'
})
export class LoadPokemonDataDirective implements OnInit {
  @Input() appLoadPokemonData: iPokemonData;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.pokemonData(this.appLoadPokemonData).subscribe(resPokeData => {
      this.appLoadPokemonData = Object.assign(this.appLoadPokemonData, resPokeData);

      console.log(this.appLoadPokemonData);
    });
  }
}
