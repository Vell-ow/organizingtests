// pageobjects/formvalidation.page.js

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for the form validation demo page
 */
class FormValidationPage extends Page {
    /**
     * Selector for the error messages after submission.
     * The error summary is an <h2> with class "wb-frmv-err".
     * The individual error messages are links within the list right after it.
     * Selector: .wb-frmv-err + ul li a
     */
    get errorMessages() {
        // Get all anchor links (<a>) within list items (<li>) that follow the <h2> error heading
        return $$('.wb-frmv-err + ul li a');
    }

    /**
     * Selector for the submit button
     */
    get submitButton() {
        return $("(//input[@value='Submit'])[1]");
    }

/**
     * Overwrite open method to visit the form validation page using the full absolute URL.
     * This bypasses the base page's method to avoid path-appending issues.
     * @returns {Promise<string>}
     */
    async open() {
        // Use browser.url() directly with the full absolute link.
        return browser.url(`https://wet-boew.github.io/v4.0-ci/demos/formvalid/formvalid-en.html`);
    }
}

// Instantiate and export the page object
export default new FormValidationPage();