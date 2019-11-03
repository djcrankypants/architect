import Page from './page';

class NewFeed extends Page {
  constructor () {
    super();
    this.elements = {
      cancelButton : '[data-id="cancel-button"]',
      endDate: '[data-id="field-end_date"]',
      feedName: '[data-id="field-name"]',
      publisherName: '[data-id="field-publisher_name"]',
      language: '[data-id="field-language"]',
      saveButton: '[data-id="save-button"]',
      startDate: '[data-id="field-start_date"]',
      url: '[data-id="field-publisher_url"]',
      version: '[data-id="field-version"]'
    };
  }

// Note: Couldn't get this #@%*Y% working, but figured it was worth showing off my very very fancy hubris.
  enterInput (field, value) {
    // camel-case time!
    const pattern = /[A-Z]/;
    const fieldName = field.replace(' ', '').replace(pattern, field.match(pattern)[0].toLowerCase());
    const inputField = $(this.elements[fieldName]);
    inputField.setValue(name);
  }
}

export default new NewFeed();;
