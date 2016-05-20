export class RouterDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('router-demo-app h1')).getText();
  }
}
