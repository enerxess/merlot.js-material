import { TestBed, inject } from '@angular/core/testing';

import { MerlotMaterialService } from './merlot-material.service';

describe('MerlotMaterialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MerlotMaterialService]
    });
  });

  it('should be created', inject([MerlotMaterialService], (service: MerlotMaterialService) => {
    expect(service).toBeTruthy();
  }));
});
