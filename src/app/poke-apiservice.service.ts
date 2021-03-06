import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokeServiceRes } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIServiceService {

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<PokeServiceRes>{
    const link = 'https://pokeapi.co/api/v2/pokemon/';
    return this.http.get<PokeServiceRes>(link);
  }
}
