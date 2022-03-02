import { TestBed } from '@angular/core/testing';

import { Puzzle.ServiceService } from './puzzle.service.service';

describe('Puzzle.ServiceService', () => {
  let service: Puzzle.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Puzzle.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
