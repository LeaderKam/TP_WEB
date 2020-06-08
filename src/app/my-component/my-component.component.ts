import { Component, OnInit } from '@angular/core';
import { PokemonAPIService } from '../service/pokeApi/poke-api.service';
import { Pokemon, PokemonDetail } from '../service/pokeApi/pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [],
})
export class MyComponentComponent implements OnInit {
  id = '';
  searchPokeName = '';
  selectedPokeId: string;
  title = 'titre';
  pokes: Pokemon[] = [];
  pokemonDetail: PokemonDetail;
  constructor(private pokemonService: PokemonAPIService) {

   }

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe(
      (data) => {
        // "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
       data.results.forEach((item, index) => this.pokes.push(new Pokemon('' + index, item.name, item.url)));
       console.log(this.pokes);
      }
    );
  }
  go(){
   if (this.selectedPokeId != '') {
     this.pokemonService.getPokemonInfo(this.selectedPokeId).subscribe(
       (response) => {
          this.pokemonDetail = response;
       }
     );
   }
  }

}
