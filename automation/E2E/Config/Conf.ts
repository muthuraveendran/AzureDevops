import { stdout } from 'process';
import { Config, element, by, browser } from 'protractor'
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');

export let config: Config = {
  framework: "jasmine",
  directConnect: true,

  // mobile
  // capabilities: {
  //   'browserName': 'chrome',
  //   'chromeOptions': {
  //     'excludeSwitches': ['enable-automation'],
  //     'args': ["--incognito"],
  //     'mobileEmulation' : {
  //       // 'deviceName': 'iPad Mini'
  //       'deviceName': 'iPhone 4'

  //     }
  //   },
  //   'acceptInsecureCerts': true
  // },

  //Desktop
  capabilities: {
    browserName: 'chrome',
    // shardTestFiles: true,
    // maxInstances: 1,
    chromeOptions: {
      'excludeSwitches': ['enable-automation'],
      args: ["--incognito"],
      prefs: {
        'download': {
          'prompt_for_download': false,
          'default_directory': '/e2e/downloads/',
        }
      }
    },
    'acceptInsecureCerts': true

  },

  onPrepare: async () => {

    /* Jasmine Spec Repoter is used show case the test result command line */
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      },
      displayFailuresSummary: true,
      displayFailuredSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true,
    }));

    //    Add a screenshot reporter and store screenshots to `/Reports/Screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'Reports/Screenshots'
    }).getJasmine2Reporter());

    /* Credential Login */
    let userName = element(by.id('email'));
    let password = element(by.id('password'));
    let loginButton = element(by.xpath("//button[@type='submit']"));

    // await browser.manage().window().maximize();
    // await browser.waitForAngularEnabled(false);
    // await browser.get(browser.params.url);
    // await browser.sleep(1000);
    // await userName.sendKeys(browser.params.userName);
    // await password.sendKeys(browser.params.password);
    // // await browser.waitForAngularEnabled(false);
    // await loginButton.click();
    // await browser.waitForAngular();
    // await browser.sleep(1000);




    // await browser.waitForAngularEnabled(true);
  },

  suites: {
    priceplan:"../Spec/Account/PricePlan.js",
    smoke: '../Spec/Smoke/Smoke.js',
    add: '../Spec/Schedule/Add.js',
    validate: '../Spec/Schedule/Validation.js',
    update: "../Spec/Schedule/Update.js",
    availability: "../Spec/Schedule/Availability.js",
    dispatch: '../Spec/DispatchRules/Dispatch.js',
    location: '../Spec/MultiLocation/Location.js',
    fuel: '../Spec/Settings/FuelSurcharge.js',




    billing: '../Spec/Billing/Billing.js',
    course: "../Spec/Course/course.js",
    // account:"../Spec/Account/Account.js",
    // events:"../Spec/Events/Events.js",
    // announcement:'../Spec/Announcements/Announcement.js',
    tenant:'../Spec/Tenant/Tenant.js',
    // reports:"../Spec/Reports/Reports.js"

    users: '../Spec/Users/UserList.js',



    // checkin: "../Spec/Schedule/Checkin.js",





    // schedule: [
    // ],

  },

  seleniumAddress: 'http://localhost:4444/wd/hub',

  allScriptsTimeout: 600000,
  getPageTimeout: 300000,

  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 1240000
  },

  // onComplete: function() {
  //   console.log("Sending email with report");
  //   var sys = require('utils');
  //   var exec = require('child_process').exec;
  //   function puts(error,stdout,stderr){ sys.puts(stdout) }
  //   exec("node nodemailer.js",puts)
    
  // }

}
