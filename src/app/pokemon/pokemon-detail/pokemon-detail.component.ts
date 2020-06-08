import { Component, OnInit, Input, Output } from '@angular/core';
import { PokemonDetail } from '../../service/pokeApi/pokemon';
import { PokemonShareInfoService } from '../../service/pokeApi/pokemon-share-info.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  @Input('detail') pokemonDetail: PokemonDetail;
  constructor(
    private pokemonShareInfo: PokemonShareInfoService
  ) {
    this.pokemonShareInfo.getObservable().subscribe(
      (response) => {
        console.log('e' + response);
      }
    );
  }

  ngOnInit(): void {

  }

}
