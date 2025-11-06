import { $ } from "@wdio/globals";

import Page from "./page.js";


/**

* sub page containing specific selectors and methods for a specific page

*/

class ChallengeDomPage extends Page {

/**

* define selectors using getter methods

*/


//get selector for link at bottom of page using WDIO Link

// https://webdriver.io/docs/selectors/#xpath:~:text=View%20on%20GitHub-,Link,-Text%E2%80%8B

get linkText() {

return $("=Elemental Selenium");

}

//get selector link for using WDIO Partial link

// https://webdriver.io/docs/selectors/#xpath:~:text=View%20on%20GitHub-,Partial,-Link%20Text%E2%80%8B

get partLink() {

return $("*=Selenium");

}


//get selector for <Apperian0>

//using xpath

get appeOCell() {

return $('//*[@id="content"]/div/div/div/div[2]/table/tbody/tr[1]/td[2]');

}


/**

* overwrite specific options to adapt it to page object

in this case we pass checkboxes in order to navigate to the

https://the-internet.herokuapp.com/checkboxes page

*/

// this function comes from page.js and it takes a variable. The variable is the part that comes after the "/"" in page.js you want to navigate to.

open() {

return super.open("challenging_dom");

}

}

// this should match exactly whatever you named your class at top of this page. If you don't do this it can't be used in other parts of your project

export default new ChallengeDomPage();