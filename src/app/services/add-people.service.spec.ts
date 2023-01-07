import { TestBed } from '@angular/core/testing';

import { AddPeopleService } from './add-people.service';

describe('AddPeopleService', () => {
  let service: AddPeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
