// pageobjects/home.page.js

import Page from './page.js'; // Assuming you have a base page.js file

/**
 * sub page containing specific selectors and methods for the home page
 */
class HomePage extends Page {

    /**
     * Define selector for the list of examples on the home page using $$
     * The examples are links within <li> elements inside the <ul> on the page body.
     * Selector: #content ul li
     */
    get listExamples() {
        const expectedSize = 44;
        const incorrectSize = 50;
        // Use a CSS selector to get all <li> elements within the <ul> under #content
        return $$('#content ul li');
    }

    /**
     * Overwrite open method to visit the home page (base URL path is '')
     * @returns {Promise<string>}
     */
    open() {
        return super.open('');
    }
}

// Instantiate and export the page object
export default new HomePage();