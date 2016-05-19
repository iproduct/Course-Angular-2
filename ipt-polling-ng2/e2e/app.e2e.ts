import { IptPollingNg2Page } from './app.po';

describe('ipt-polling-ng2 App', function() {
  let page: IptPollingNg2Page;

  beforeEach(() => {
    page = new IptPollingNg2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ipt-polling-ng2 works!');
  });
});
