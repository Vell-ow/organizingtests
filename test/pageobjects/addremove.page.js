import Page from './page.js';

class AddRemovePage extends Page {

    // Selector for the "Add Element" button
    // We use $ because it selects a single element
    get addButton() {
        return $('#content button'); // The "Add Element" button on the page
    }

    // Selector for all "Delete" buttons
    // We use $$ because there can be multiple delete buttons
    get deleteButtons() {
        return $$('#elements button');
    }

    // Helper function: clicks the "Add Element" button a certain number of times
    async addElements(count) {
        for (let i = 0; i < count; i++) {
            await this.addButton.click();
        }
    }

    // Opens the Add/Remove Elements page
    open() {
        return super.open('add_remove_elements/');
    }
}

export default new AddRemovePage();