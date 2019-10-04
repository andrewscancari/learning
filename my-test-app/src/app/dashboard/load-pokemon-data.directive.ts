import { Directive, OnInit, Input } from '@angular/core';
import { iPokemonData } from './pokemon-data.interface';
import { PokemonApiService } from '../pokemon-api.service';

@Directive({
  selector: '[appLoadPokemonData]'
})
export class LoadPokemonDataDirective implements OnInit {
  @Input() appLoadPokemonData: iPokemonData;
  constructor(private pokemonApiService: PokemonApiService) { }

  ngOnInit() {
    this.pokemonApiService.pokemonData(this.appLoadPokemonData).subscribe(resPokeData => {
      this.appLoadPokemonData = Object.assign(this.appLoadPokemonData, resPokeData);
    });
  }
}
