import { expect } from '@wdio/globals'
import SecurePage from '../pageobjects/secure.page.js'
import CheckboxesPage from '../pageobjects/checkboxes.page.js'
import LoginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        
        // Assert login success message is visible and contains the correct text
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
        
        // Visual comparison check (assuming this is correctly set up)
        await expect(SecurePage.flashAlert).toMatchElementSnapshot('flashAlert')
    })

    it('should logout after login', async () => {
        // ASSUMPTION: SecurePage.logout() exists and clicks the logout link.
        await SecurePage.logout()

        // 1. Wait for the login page to appear by waiting for the username input field to exist.
        // FIX: The selector is 'inputUsername' in your LoginPage, not 'usernameInput'.
        await LoginPage.inputUsername.waitForExist({ timeout: 5000 });

        // 2. Assert that the username field is visible, confirming the return to the login page.
        await expect(LoginPage.inputUsername).toBeExisting() 
        
        // Optional: check for password field existence (good practice)
        await expect(LoginPage.inputPassword).toBeExisting()

        // 3. Optional: check for logout confirmation message (on the login page)
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged out of the secure area!'))
    })
})

describe('Checkbox Interaction', () => {
    // 1st test: navigate to checkboxes page and confirm that checkbox 1 is unchecked
    it('should navigate to the page and verify checkbox 1 is unchecked', async () => {

        // Arrange: Navigate to the checkboxes page
        await CheckboxesPage.open()

        // Assert: Verify checkbox 1 is not checked initially
        await expect(CheckboxesPage.chkBox1).not.toBeSelected()
    })

    // 2nd test: unclick checkbox 2 and confirm it is unchecked
    it('should uncheck checkbox 2 and confirm its state', async () => {

        // Arrange: Ensure we start with a known state. 
        // Note: Checkbox 2 is usually checked by default for this test.
        // We call open() again to refresh the page and ensure the default state.
        await CheckboxesPage.open()

        // Act: Click checkbox 2 to uncheck it
        await CheckboxesPage.chkBox2.click()

        // Assert: Verify checkbox 2 is now unchecked
        await expect(CheckboxesPage.chkBox2).not.toBeSelected()
    })
})