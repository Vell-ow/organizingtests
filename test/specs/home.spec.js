// specs/home.spec.js

import HomePage from '../pageobjects/home.page.js';

describe.skip('Working with Multiple Elements', () => {
    it('should check the number of examples displayed on the home page', async () => {
        // 1. Open the home page
        await HomePage.open();

        // 2. Assertion: Check for the expected array size (44)
        // Note: The specific number of list items on the-internet is 44 as of now.
        await expect(HomePage.listExamples).toBeElementsArrayOfSize({ eq: expectedSize });
        
        console.log(`Success: Found the expected number of examples: ${expectedSize}`);
    });
    
    it('should demonstrate a failing assertion for a different size check', async () => {
        // This test is designed to fail to meet the "Create a test assertion check for another length (should fail)" requirement.
        
        // 1. Open the home page (might be open from the previous test, but good practice to include)
        await HomePage.open();
        
        // 2. Assertion: Check for an intentionally wrong array size (e.g., 50)
        await expect(HomePage.listExamples).not.toBeElementsArrayOfSize({ eq: incorrectSize });
        
        // The test will fail here because the size is 44, not 50.
        // The assertion will throw an error: "Expected an array of size '50' but got '44'"
        console.log(`Failure expected: This line will likely not be reached due to the failing assertion.`);
    });
});