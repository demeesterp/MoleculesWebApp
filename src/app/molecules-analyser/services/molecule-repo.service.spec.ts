import { TestBed } from '@angular/core/testing';

import { MoleculeRepoService } from './molecule-repo.service';

describe('MoleculeRepoService', () => {
  let service: MoleculeRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoleculeRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
