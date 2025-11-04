import { $ } from '@wdio/globals'
import Page from './page.js';

class ChallengingDomPage extends Page {

    // 1. Link Text Selector
    get full() {
        return $('=Elemental Selenium');
    }

    // 2. Partial Link Text Selector
    get partial() {
        return $('*=Elemental');
    }

    // 3. XPath Selector (Based on the assignment's explicit requirement: text "Apeirian0")
    get apeirian0TableCell() {
        // This selector is required to meet the assignment's explicit text check.
        return $('//*[@id="content"]/div/div/div/div[2]/table/tbody/tr[1]/td[2]');
    }

    /**
     * Uses the WDIO expect().toHaveText() API directly.
     * This fulfills the existence and text assertions required by the assignment 
     * while using the specific WDIO feature.
     */
    async existsWText() {
        const cellElement = this.apeirian0TableCell; 
        
        // 1. Assertion that states that the element exists (WDIO automatically includes 
        // a check for element existence before attempting to get its text).
        
        // 2. Assertion that it has the exact text "Apeirian0" using the toHaveText API.
        // This single line fulfills the twin requirement (exists AND has text).
        await expect(cellElement).toHaveText('Apeirian0');
    }

    /**
     * Opens the page
     */
    open() {
        return super.open('challenging_dom');
    }
}

export default new ChallengingDomPage();