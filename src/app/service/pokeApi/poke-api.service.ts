import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonInterface, PokemonDetail } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService {
  link = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) { }

  getPokemon(): Observable<PokemonInterface>{
    return this.http.get<PokemonInterface>(this.link);
  }

  getPokemonInfo(id: string): Observable<PokemonDetail>{
    return this.http.get<PokemonDetail>(this.link + id + '/');
  }
}
