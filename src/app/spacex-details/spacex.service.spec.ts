import { TestBed } from '@angular/core/testing';

import { SpacesxProgramsService } from './spacesx-programs.service';

describe('SpacesxProgramsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpacesxProgramsService = TestBed.get(SpacesxProgramsService);
    expect(service).toBeTruthy();
  });
});
