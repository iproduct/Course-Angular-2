export class IptPollingNg2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ipt-polling-ng2-app h1')).getText();
  }
}
