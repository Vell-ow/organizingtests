import AddRemovePage from '../pageobjects/addremove.page.js';

describe.skip('Add/Remove Elements Test', () => {

    it('should add 4 delete buttons using a helper function', async () => {
        
        // Step 1: Navigate to the Add/Remove Elements page
        await AddRemovePage.open();

        // Step 2: Use the helper function to add 4 "Delete" buttons
        await AddRemovePage.addElements(4);

        // Step 3: Retrieve all delete buttons
        let buttons = await AddRemovePage.deleteButtons;

        // Step 4: Assert that 4 delete buttons were successfully created
        await expect(buttons).toBeElementsArrayOfSize(4);

        // Step 5 (optional): Log for clarity
        console.log('Verified that 4 Delete buttons were added successfully.');
    });
});