import { expect } from '@wdio/globals'

import ChallengingDomPage from '../pageobjects/challengingdom.page.js';

describe('Challenging DOM Selectors and Assertions', () => {

    beforeEach(async () => {
        await ChallengingDomPage.open();
    });

    // Test 1: Link Exists (Link Text Strategy)
    it('should assert the Elemental Selenium link exists using Link Text selector', async () => {
        await expect(ChallengingDomPage.full).toBeExisting();
    });

    // Test 2: Link Exists (Partial Link Text Strategy)
    it('should assert the Elemental Selenium link exists using Partial Link Text selector', async () => {
        await expect(ChallengingDomPage.partial).toBeExisting();
    });

    // Test 3: Element Exists and Has Text (XPath Strategy)
    it('should assert the <td>Apeirian0</td> element exists and has the exact required text using XPath', async () => {
        // The Page Object method now internally uses toHaveText('Apeirian0').
        await ChallengingDomPage.existsWText();
    });
    
    // Test 4: Element Text
    // it('should assert the text on each of the three buttons to the left, which changes between foo bar baz and qux as well as answer num')
    // button 1: //a[@id='83aff0b0-98a8-013e-5616-1244ede13e4a']
    // button 2: //a[@id='83aff0b0-98a8-013e-5617-1244ede13e4a']
    // button 3: //a[@id='83aff0b0-98a8-013e-5618-1244ede13e4a']
    // ans text box: id='canvas'
});