import { TestBed } from '@angular/core/testing';

import { AdminNavService } from './admin-nav.service';

describe('AdminNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminNavService = TestBed.get(AdminNavService);
    expect(service).toBeTruthy();
  });
});
