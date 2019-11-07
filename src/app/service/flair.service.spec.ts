import { TestBed } from '@angular/core/testing';

import { FlairService } from './flair.service';

describe('FlairService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlairService = TestBed.get(FlairService);
    expect(service).toBeTruthy();
  });
});
