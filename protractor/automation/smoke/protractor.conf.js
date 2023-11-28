exports.config = {
    framework: 'jasmine2', //Type of Framework used 
    directConnect:true, 
    specs: ['spec.js'], //Name of the Specfile 
    onPrepare() { 
        /* const jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(
            new jasmineReporters(null, true,true,'/test/e2e/jasmineReporter')
        ); */


       /*  var reporters = require('jasmine-reporters');
        
        var junitReporter = new reporters.JUnitXmlReporter(
            {
                savePath:'testresults',
                consolidateAll:false
            }
        ); */


      /*   var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(
            new jasmineReporters.JUnitXmlReporter({
                consolidateAll:true,
                savePath:'testresults',
                filePrefix:'xmloutput'
                
            })
        );  */
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
jasmine.getEnv().addReporter(new SpecReporter({spec:{
    displayStacktrace:true
}}));
    
        

          require('ts-node').register({ 
          project: require('path').join(__dirname, './tsconfig.json') // Relative path of tsconfig.json file 
        });
    } 
}