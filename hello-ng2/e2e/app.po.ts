export class HelloNg2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hello-ng2-app h1')).getText();
  }
}
