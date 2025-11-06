import AddRemovePage from '../pageobjects/addRemove.page.js';

describe('Add/Remove Elements Tests', () => {

    it('should add 4 delete buttons using a helper function', async () => {
        
        // Step 1: Navigate to Add/Remove Elements page
        await AddRemovePage.open();

        // Step 2: Add 4 "Delete" buttons dynamically
        await AddRemovePage.addElements(4);

        // Step 3: Verify there are 4 delete buttons
        let buttons = await AddRemovePage.deleteButtons;
        await expect(buttons).toBeElementsArrayOfSize(4);
    });


    it('should remove two of three delete buttons and verify only one remains', async () => {
        
        // Step 1: Open the page fresh
        await AddRemovePage.open();

        // Step 2: Add 3 Delete buttons
        await AddRemovePage.addElements(3);

        // Step 3: Remove 2 of the 3 Delete buttons
        await AddRemovePage.removeElements(2);

        // Step 4: Verify only 1 Delete button remains
        let remainingButtons = await AddRemovePage.deleteButtons;
        await expect(remainingButtons).toBeElementsArrayOfSize(1);
    });


    it('should remove all delete buttons and verify none remain', async () => {
        
        // Step 1: Open the page again
        await AddRemovePage.open();

        // Step 2: Add multiple Delete buttons (e.g. 5)
        await AddRemovePage.addElements(5);

        // Step 3: Remove all Delete buttons
        await AddRemovePage.removeAllElements();

        // Step 4: Verify there are no Delete buttons left
        let noButtons = await AddRemovePage.deleteButtons;
        await expect(noButtons).toBeElementsArrayOfSize(0);
    });
});