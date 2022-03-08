import { TestBed } from '@angular/core/testing';

import { PuzzleService } from './puzzle.service.service';

describe('Puzzle.ServiceService', () => {
  let service: PuzzleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuzzleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
