import { TestBed } from '@angular/core/testing';

import { BackofficeManagerService } from './backoffice-manager.service';
import { last, take } from 'rxjs';

describe('BackofficeManagerService', () => {
  let service: BackofficeManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackofficeManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit when add or remove petition', () => {
    service.loadingSubject$.pipe(take(1)).subscribe((value) => {
      expect(value).toBe(true);
    });
    service.addPetition(false);
    service.loadingSubject$.pipe(take(1)).subscribe((value) => {
      expect(value).toBe(false);
    });
    service.removePetition(false);
  });

  it('should decrease transparent petitions counter if function is called with transparent as true', () => {
    service.addPetition(true);
    service.addPetition(true);
    service.removePetition(true);
    service.transparentLoadingSubject$.pipe(last()).subscribe((value) => {
      expect(value).toEqual(true);
    });
    service.removePetition(true);
    service.transparentLoadingSubject$.pipe(last()).subscribe((value) => {
      expect(value).toEqual(false);
    });
  });
});
