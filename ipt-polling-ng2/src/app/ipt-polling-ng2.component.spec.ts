import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { IptPollingNg2AppComponent } from '../app/ipt-polling-ng2.component';

beforeEachProviders(() => [IptPollingNg2AppComponent]);

describe('App: IptPollingNg2', () => {
  it('should create the app',
      inject([IptPollingNg2AppComponent], (app: IptPollingNg2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ipt-polling-ng2 works!\'',
      inject([IptPollingNg2AppComponent], (app: IptPollingNg2AppComponent) => {
    expect(app.title).toEqual('ipt-polling-ng2 works!');
  }));
});
