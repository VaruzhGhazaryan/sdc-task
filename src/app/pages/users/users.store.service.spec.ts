import { TestBed } from '@angular/core/testing';

import { Users.StoreService } from './users.store.service';

describe('Users.StoreService', () => {
  let service: Users.StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Users.StoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
