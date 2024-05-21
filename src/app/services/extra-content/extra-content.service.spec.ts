import { TestBed } from '@angular/core/testing';

import { ExtraContentService } from './extra-content.service';

describe('ExtraContentService', () => {
  let service: ExtraContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtraContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
