import Page from './page.js';

class SecurePage extends Page {
    get flashAlert() {
        return $('#flash');
    }

    // Updated selector — adjust based on your app
    get logoutButton() {
        return $('a=Logout');
    }

    async logout() {
        await this.logoutButton.waitForExist({ timeout: 5000 });
        await this.logoutButton.click();
    }
}

export default new SecurePage();