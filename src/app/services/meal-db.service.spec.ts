import { TestBed } from '@angular/core/testing';

import { MealDBService } from './meal-db.service';

describe('MealDBService', () => {
  let service: MealDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
