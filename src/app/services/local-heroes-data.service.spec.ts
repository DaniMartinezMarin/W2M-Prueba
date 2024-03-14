import { TestBed } from '@angular/core/testing';

import { LocalHeroesDataService } from './local-heroes-data.service';

describe('LocalHeroesDataService', () => {
  let service: LocalHeroesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalHeroesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
