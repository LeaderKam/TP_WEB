import { Component, OnInit, Input, Output } from '@angular/core';
import { Pokemon, PokemonDetail } from '../service/pokeApi/pokemon';
import { PokemonAPIService } from '../service/pokeApi/poke-api.service';
import { PokemonShareInfoService } from '../service/pokeApi/pokemon-share-info.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  id = '';
  searchPokeName = '';
  selectedPokeId: string;
  title = 'titre';
  pokes: Pokemon[] = [];
  @Output() pokemonDetail: PokemonDetail;
  constructor(
    private pokemonService: PokemonAPIService,
    private pokemonShareInfo: PokemonShareInfoService
    ) {

   }

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe(
      (data) => {
        // "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
       data.results.forEach((item, index) => this.pokes.push(new Pokemon('' + (index + 1), item.name, item.url)));
      }
    );
  }
  go(){
    if (this.selectedPokeId != '') {
      this.pokemonService.getPokemonInfo(this.selectedPokeId).subscribe(
        (response) => {
            this.pokemonDetail = response;
            this.pokemonShareInfo.setValue(this.selectedPokeId);
        }
      );
    }
  }

}
