import { browser, expect } from "@wdio/globals";

import ChallengeDomPage from "../pageobjects/challengingdom.page.js";


//.skip after a Describe after (e.g. describe.skip ot it.skip) if you don't want to run a test


describe("My Challenging Dom Selectors", () => {

it("Confirm link exists using WDIO link selector strategy", async () => {

//navigate to ChaDom page. We are calling the open functions we created in ChaDom.page.js

await ChallengeDomPage.open();

await browser.maximizeWindow();

//confirm that link exists

await expect(ChallengeDomPage.linkText).toExist();

//you can further comfirm that link text is correct. The text must be exactly what's inside the selector/locator

await expect(ChallengeDomPage.linkText).toHaveText("Elemental Selenium");

});


it("Confirm link exists using WDIO partial link selector strategy", async () => {

//navigate to ChaDom page. We are calling the open functions we created in ChaDom.page.js


//confirm that link exists

await expect(ChallengeDomPage.partLink).toExist();

//You can check on part of the text inside the selector. This way you don't have to be exact. Case sensitive, but there are options to make not case sensitive

await expect(ChallengeDomPage.partLink).toHaveText(

expect.stringContaining("Elemental")

);

});


it("Confirm table has Apeirian0 text exists using xPath selector strategy", async () => {

//confirm that link exists

await expect(ChallengeDomPage.appeOCell).toExist();

//check text inside the element matches what we are looking for: Apeirian0

//https://webdriver.io/docs/api/expect-webdriverio#tohavetext

await expect(ChallengeDomPage.appeOCell).toHaveText("Apeirian0");

});

});


// You can skip a suite (describe) or individual test (it) by adding .skip to describe or it

// e.g. describe.skip or it.skip

// https://mochajs.org/#:~:text=%23-,INCLUSIVE%20TESTS,-This%20feature%20is


// You can also run just certain tests by using .only

// e.g. describe.only or it.only

//https://mochajs.org/#:~:text=%23-,EXCLUSIVE%20TESTS,-WARNING%3A%20Exclusive%20tests