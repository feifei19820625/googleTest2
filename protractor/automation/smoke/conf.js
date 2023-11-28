// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  onPrepare: function() {
  global.screenshot = require('screenshot-protractor').saveScreenshot;
    },
  imageURL:'data:image/jpeg;base64,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',
  Visit_Result:3
}
