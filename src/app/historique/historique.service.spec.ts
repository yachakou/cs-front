/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HistoriqueService } from './historique.service';

describe('HistoriqueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistoriqueService]
    });
  });

  it('should ...', inject([HistoriqueService], (service: HistoriqueService) => {
    expect(service).toBeTruthy();
  }));
});
