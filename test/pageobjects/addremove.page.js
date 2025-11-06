import Page from './page.js';

class AddRemovePage extends Page {

    // Single "Add Element" button
    get addButton() {
        return $('#content button');
    }

    // Multiple "Delete" buttons
    get deleteButtons() {
        return $$('#elements button');
    }

    // Helper function: adds a given number of Delete buttons
    async addElements(count) {
        for (let i = 0; i < count; i++) {
            await this.addButton.click();
        }
    }

    // Helper function: removes a given number of Delete buttons
    async removeElements(count) {
        let buttons = await this.deleteButtons;
        for (let i = 0; i < count && i < buttons.length; i++) {
            await buttons[i].click();
        }
    }

    // Helper function: removes all Delete buttons currently on the page
    async removeAllElements() {
        let buttons = await this.deleteButtons;
        for (let button of buttons) {
            await button.click();
        }
    }

    // Opens the Add/Remove Elements page
    open() {
        return super.open('add_remove_elements/');
    }
}

export default new AddRemovePage();