import { TestBed } from '@angular/core/testing';

import { CredencialesInterceptor } from './credenciales.interceptor';

describe('CredencialesInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CredencialesInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CredencialesInterceptor = TestBed.inject(CredencialesInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
