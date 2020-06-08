import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonShareInfoService {
  public stringVar = new Subject<string>();
  value: string;
  constructor() { }

  getObservable(): Subject<string>{
    return this.stringVar;
  }
  getValue(): string{
    return this.value;
  }
  public setValue(stringVar: string){
    this.stringVar.next(stringVar);
  }
}
