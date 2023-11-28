
export.config = {
    framework: 'jasmine', //Type of Framework used 
    directConnect:true, 
    specs: ['spec.js'], //Name of the Specfile  
    
    onPrepare() { 
          let reporters = require('node_modules/jasmine-reporters');
          jasmine.getEnv().addReporter(
              new reporters(null, true,true,'/test/e2e/jasmineReporter')
          );
          
          require('ts-node').register({ 
          project: require('path').join(__dirname, './tsconfig.json') // Relative path of tsconfig.json file 
          
        });
    } 
}