import { TestBed } from '@angular/core/testing';
import { PersonService } from './person-service';

describe('PersonService', () => {
  let service : PersonService;

  beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(PersonService);
  });

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
