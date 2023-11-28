        const { browser, element } = require("protractor");
        const util=require('./util.js').util;
        const config=require('./conf.js').config;
        const locators=require('./locators.js').locators;
        var EC = protractor.ExpectedConditions;
        const Util = new util();
 /*
 * For the questions:
 * 1. Must Store an Screen shot of the last visited page
 *    Answer:after clicking the third one of search result, the window is switched to the detail page,
 *
 * 2. Should validate that the search results are related to the used image
 *    after the image is searched, there is one button as Find image Resource, after clicking it,
 *    there are results listed, I verified it by searched the key words including the 'harry potter'
 *    to prove that the image is related with the search results.

 */
describe('SearchByImage', () => {
          //do the basic preparation
          Util.prepare();


          it('Test Case1:Validate the search results are related to the used image', () => {

                     browser.ignoreSynchronization=true;
                     //maximize the window of browser
                     Util.maxWindow();
                     //give a breathe for 2 seconds
                     Util.sleep(2000);
                     //go to https://www.google.com/?hl=en to get into the home page;
                     browser.get(locators.basicURL);
                     //click the Camera icon to open the window of searching picture
                     Util.click(by.xpath(locators.imageSearchIcon));
                     Util.sleep(3000);
                     browser.findElement(by.xpath(locators.urlInputBox)).sendKeys(config.imageURL);;
                     Util.sleep(3000);
                     //click search button
                     Util.click(by.xpath(locators.searchButton));
                     Util.sleep(3000);
                     //click the button of 'find image source'
                     Util.click(by.xpath(locators.findImageSourceButton));
                     Util.sleep(3000);
                      // to verify the result after imaging are correct, here we go the 'find image resource' to check that if there are key words including 'harry potter'
                      var hpCount= element.all(by.xpath('//*[contains(text(), "Harry Potter")]')).count();
                      expect(hpCount).toBeGreaterThan(0);
                      Util.sleep(3000);
             });

          it('Test Case2:take the screenshot for the detail page of third one', () => {
                   //choose the 3rd item in the search result
                    browser.ignoreSynchronization=true;
                    //maximize the window of browser
                    Util.maxWindow();
                    //give a breathe for 2 seconds
                    Util.sleep(2000);
                    //go to https://www.google.com/?hl=en to get into the home page;
                    browser.get(locators.basicURL);
                    //click the Camera icon to open the window of searching picture
                    Util.click(by.xpath(locators.imageSearchIcon));
                    Util.sleep(3000);
                    browser.findElement(by.xpath(locators.urlInputBox)).sendKeys(config.imageURL);;
                    Util.sleep(3000);
                    //click search button
                    Util.click(by.xpath(locators.searchButton));
                    Util.sleep(3000);
                     var index=config.Visit_Result-1;
                     var elm= element.all(by.xpath(locators.thirdItem)).get(index);
                     //perform the CTRL+Click to open a new tab to show the detail page of the third one of search result
                     Util.CTRLAndclick(elm);
                     Util.sleep(5000);
                     //switch to new tab of windows
                     Util.switchWindow();
                     Util.sleep(5000);
                     Util.takeScreenShot();
                     Util.sleep(4000);
          });


});

