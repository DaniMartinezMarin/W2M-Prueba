import { TestBed } from '@angular/core/testing';

import { BackofficeManagerService } from './backoffice-manager.service';

describe('BackofficeManagerService', () => {
  let service: BackofficeManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackofficeManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
