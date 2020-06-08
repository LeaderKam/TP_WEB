import { TestBed } from '@angular/core/testing';

import { PokemonShareInfoService } from './pokemon-share-info.service';

describe('PokemonShareInfoService', () => {
  let service: PokemonShareInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonShareInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
