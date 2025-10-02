import { $ } from '@wdio/globals'
import Page from './page.js';

class CheckboxesPage extends Page {
    /**
    * define selectors using getter methods
    */
   // use a variable name that I define to identify an html element on the page
   // Select the first checkbox using a specific selector
   //get selector for checkbox1
   get chkBox1 (){
    return $('#checkboxes input:nth-of-type(1)');
   }
   //get selector for checkbox2
   get chkBox2 (){
    return $('#checkboxes input:nth-of-type(2)');
   }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('checkboxes');
    }
}
export default new CheckboxesPage();