import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { RouterDemoAppComponent } from '../app/router-demo.component';

beforeEachProviders(() => [RouterDemoAppComponent]);

describe('App: RouterDemo', () => {
  it('should create the app',
      inject([RouterDemoAppComponent], (app: RouterDemoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'router-demo works!\'',
      inject([RouterDemoAppComponent], (app: RouterDemoAppComponent) => {
    expect(app.title).toEqual('router-demo works!');
  }));
});
