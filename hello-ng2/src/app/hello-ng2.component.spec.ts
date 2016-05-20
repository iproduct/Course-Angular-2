import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HelloNg2AppComponent } from '../app/hello-ng2.component';

beforeEachProviders(() => [HelloNg2AppComponent]);

describe('App: HelloNg2', () => {
  it('should create the app',
      inject([HelloNg2AppComponent], (app: HelloNg2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'hello-ng2 works!\'',
      inject([HelloNg2AppComponent], (app: HelloNg2AppComponent) => {
    expect(app.title).toEqual('hello-ng2 works!');
  }));
});
