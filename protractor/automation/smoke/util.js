const { browser, element } = require("protractor");
var fs = require('fs');
exports.util=function(){
//give a breathe to wait the elements to load
this.sleep = function (num) {
  browser.sleep(num);
};
//maximize the window
this.maxWindow = function () {
  browser.manage().window().maximize();

};
//prepare the environments
this.prepare = function () {
  var originalTimeout;
    beforeEach(function(){
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 150000;
    });
    afterEach(function(){
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    })

};

this.click = function (a) {
  element.all(a).click();

};

this.CTRLAndclick = function (elm) {
  browser.actions()
            .mouseMove(elm)
            .keyDown(protractor.Key.CONTROL)
            .click()
            .perform();

};

//switch Window
this.switchWindow = function () {
  browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
            const url = browser.getCurrentUrl();
        });

};

this.takeScreenShot = function () {
  browser.takeScreenshot().then(function (data) {
           var stream = fs.createWriteStream('testresults/screenShot.png');
           stream.write(new Buffer(data, 'base64'));
           stream.end();
       });
};


}