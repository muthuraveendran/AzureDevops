import {Config , browser, by , element} from 'protractor'
var HtmlReporter = require('protractor-beautiful-reporter');
export let config: Config={
framework:"jasmine",

capabilities:{
browserName:'chrome',
shardTestFiles: true,
maxInstances: 1,
// args: ['--show-fps-counter'],
chromeOptions: {
    args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
  }

},

directConnect: true,


onPrepare: async () => {
//    Add a screenshot reporter and store screenshots to `/Reports/Screenshots`:
jasmine.getEnv().addReporter(new HtmlReporter({
  baseDirectory: 'Reports/Screenshots'
}).getJasmine2Reporter());

    /* Credential Login */
    let usernamelocator = element(by.id('email'));
    let passwordlocator = element(by.id('password'));
    let loginbuttonlocator = element(by.xpath("//button[@type='submit']"));

    await browser.manage().window().maximize();
    await browser.get('https://portal.needlenine.com/#/login');
    await usernamelocator.sendKeys("gordon@rainierflight.com");
    await passwordlocator.sendKeys("Rainier1");
    await browser.waitForAngularEnabled(false);
    await loginbuttonlocator.click();
 },


 suites: {
  smoke: '../Spec/Smoke/Smoke.js',
  billing:'../Spec/Billing/Billing.js',
  multiLocation:'../Spec/MultiLocation/Location.js',
  users:'../Spec/Users/UserList.js',
  report:'../Spec/DailyStatus/DailyStatus.js',

  schedule: [
    // '../Spec/Schedule/Add.js',
    '../Spec/Schedule/Validation.js',
    // '../Spec/Schedule/Availability.js',
    // "../Spec/Schedule/Checkin.js"
    // "../Spec/Schedule/Update.js"
  ],
  
},

seleniumAddress:'http://localhost:4444/wd/hub',

allScriptsTimeout:600000,
getPageTimeout:300000,

jasmineNodeOpts:{
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval:1240000
}

}
