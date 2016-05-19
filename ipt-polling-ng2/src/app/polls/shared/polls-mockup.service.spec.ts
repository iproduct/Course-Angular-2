import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PollsMockupService } from './polls-mockup.service';

describe('PollsMockup Service', () => {
  beforeEachProviders(() => [PollsMockupService]);

  it('should ...',
      inject([PollsMockupService], (service: PollsMockupService) => {
    expect(service).toBeTruthy();
  }));
});
