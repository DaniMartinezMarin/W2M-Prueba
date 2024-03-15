import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Subject, of } from 'rxjs';
import { Hero } from '../../models/hero.model';
import { HeroesService } from '../../services/heroes.service';
import { BackofficeManagerService } from '../../../../services/backoffice-manager.service';
import { HeroDetailComponent } from './hero-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MockProvider} from 'ng-mocks';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let mockHeroesService: HeroesService;
  let mockBackofficeManagerService: jasmine.SpyObj<BackofficeManagerService>;
  const hero: Hero = {
    id: 1,
    name: 'Batman',
    fullName: 'Bruce Wayne',
    publisher: 'DC Comics',
    image: 'https://example.com/batman.jpg',
  };

  beforeEach(async () => {
    mockBackofficeManagerService = jasmine.createSpyObj(
      'BackofficeManagerService',
      ['addPetition', 'removePetition']
    );

    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        MockProvider(HeroesService, {
          createHero: () => of(hero),
          updateHero: () => of(hero),
          getHero: () => of(hero),
          errorOnSave: new Subject()
        }),
        {
          provide: BackofficeManagerService,
          useValue: mockBackofficeManagerService,
        },
      ],
    }).compileComponents();

    mockHeroesService = TestBed.inject(HeroesService);

    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
  });

  it('should call saveHero method for create mode', () => {
    spyOn(mockHeroesService, 'createHero').and.callThrough();
    component.isCreateMode = true;
    component.saveHero();
    expect(mockHeroesService.createHero).toHaveBeenCalled();
  });

  it('should call updateHero method for update mode', () => {
    spyOn(mockHeroesService, 'updateHero').and.callThrough();
    component.isCreateMode = false;
    component.saveHero();
    expect(mockHeroesService.updateHero).toHaveBeenCalled();
  });

  it('should retrieve hero and initialize form correctly', fakeAsync(() => {
    component.getHero(1);
    expect(mockBackofficeManagerService.addPetition).toHaveBeenCalledWith(true);
    tick(500);
    expect(mockBackofficeManagerService.removePetition).toHaveBeenCalledWith(true);
    expect(component.hero).toEqual(hero);
  }));
});
