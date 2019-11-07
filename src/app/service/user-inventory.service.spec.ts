import { TestBed } from '@angular/core/testing';

import { UserInventoryService } from './user-inventory.service';

describe('UserInventoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserInventoryService = TestBed.get(UserInventoryService);
    expect(service).toBeTruthy();
  });
});
