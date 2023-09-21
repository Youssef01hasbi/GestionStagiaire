import { TestBed } from '@angular/core/testing';

import { PostulezService } from './postulez.service';

describe('PostulezService', () => {
  let service: PostulezService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostulezService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
