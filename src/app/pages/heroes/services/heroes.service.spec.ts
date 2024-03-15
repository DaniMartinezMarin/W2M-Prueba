import { TestBed } from '@angular/core/testing';

import { HeroesService } from './heroes.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { heroMock, heroMockInterface, heroesMock, heroesMockInterface } from '../mocks/heroes.mock';

describe('HeroesService', () => {
  let service: HeroesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HeroesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get heroes info', () => {
    service.getHeroes().subscribe((heroes) => {
      expect(heroes).toEqual(heroesMock());
    });

    const request = httpMock.expectOne('api/heroes');
    expect(request.request.method).toBe('GET');

    request.flush(heroesMockInterface);
  });

  it('should get hero info', () => {
    const heroId = 6;
    service.getHero(heroId).subscribe((hero) => {
      expect(hero.id).toEqual(heroMock().id);
      expect(hero.name).toEqual(heroMock().name);
      expect(hero.fullName).toEqual(heroMock().fullName);
      expect(hero.publisher).toEqual(heroMock().publisher);
      expect(hero.image).toEqual(heroMock().image);
    });

    const request = httpMock.expectOne(`api/heroes/${heroId}`);
    expect(request.request.method).toBe('GET');

    request.flush(heroMockInterface);
  });

  it('should delete a hero', () => {
    const heroId = 6;
    service.deleteHero(heroId).subscribe((hero) => {
      expect(hero.id).toEqual(heroMock().id);
      expect(hero.name).toEqual(heroMock().name);
      expect(hero.fullName).toEqual(heroMock().fullName);
      expect(hero.publisher).toEqual(heroMock().publisher);
      expect(hero.image).toEqual(heroMock().image);
    });

    const request = httpMock.expectOne(`api/heroes/${heroId}`);
    expect(request.request.method).toBe('DELETE');

    request.flush(heroMockInterface);
  });

  it('should updateHero a hero', () => {
    service.updateHero(heroMock()).subscribe();

    const request = httpMock.expectOne(`api/heroes`);
    expect(request.request.method).toBe('PUT');
  });

  it('should create a hero', () => {
    const heroId = 6;
    service.createHero(heroMock()).subscribe((hero) => {
      expect(hero.id).toEqual(heroMock().id);
      expect(hero.name).toEqual(heroMock().name);
      expect(hero.fullName).toEqual(heroMock().fullName);
      expect(hero.publisher).toEqual(heroMock().publisher);
      expect(hero.image).toEqual(heroMock().image);
    });

    const request = httpMock.expectOne(`api/heroes`);
    expect(request.request.method).toBe('POST');

    request.flush(heroMockInterface);
  });
});
