import { TestBed } from '@angular/core/testing';

import { AgentTokenInterceptorService } from './agent-token-interceptor.service';

describe('AgentTokenInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgentTokenInterceptorService = TestBed.get(AgentTokenInterceptorService);
    expect(service).toBeTruthy();
  });
});
