// specs/formValidation.spec.js

import FormValidationPage from '../pageobjects/formvalidation.page.js';

describe('BONUS: Form Validation Error Messages', () => {
    it('should display and count the expected number of error messages on empty submission', async () => {
        // 1. Open the form validation page
        await FormValidationPage.open();
        await browser.maximizeWindow();
        await browser.pause(2000); // 👈 PAUSE added here

        // 2. Click the Submit button without filling in any required fields
        await FormValidationPage.submitButton.click();
        await browser.pause(2000); // 👈 PAUSE added here
        
        // 3. Wait for the error messages to appear (optional, but good practice)
        await FormValidationPage.errorMessages[0].waitForDisplayed();
        await browser.pause(2000); // 👈 PAUSE added here
        
        // 4. Assertion: Check for the expected array size.
        // Counting the required fields (Name, Email, Phone, Province/Territory, Postal Code) gives 5.
        const expectedErrorCount = 5; 
        
        await expect(FormValidationPage.errorMessages).toBeElementsArrayOfSize({ eq: expectedErrorCount });
        
        console.log(`Success: Found the expected number of error messages: ${expectedErrorCount}`);
    });
})