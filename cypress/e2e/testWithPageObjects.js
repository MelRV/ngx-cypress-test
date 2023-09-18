import { onFormLayoutPage } from "../support/page_objects/formLayoutPage"
import { navigateTo } from "../support/page_objects/navigationPage"

describe('Test with Page Objects', () => {

  beforeEach('Open application', () => {
    cy.visit('/')
  })
  it('Verify the navigation across the pages', () => {
    navigateTo.formLayoutPage()
    navigateTo.datePickerPage()
    navigateTo.smartTablePage()
    navigateTo.toasterPage()
    navigateTo.toolTipPage()
  })
  it('Should submit Inline and Basic form and select tomorrow date in the calendar', () => {
    navigateTo.formLayoutPage()
    onFormLayoutPage.submitInlineFormWithNameAndEmail('Artem', 'test@test.com')
    onFormLayoutPage.submitingBasicFormWithEmailAndPassword('test@test.com','password')
    navigateTo.datePickerPage()
  })
})
