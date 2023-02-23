/* jshint -W097 */
/* jshint node: true */
// node version v12.13.0
"use strict";
// require('./E2E/Resource')
module.exports = function (grunt) {

  let userName = grunt.option('userName');
  let password = grunt.option('password');
  let env = grunt.option('env');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    ts: {
      default: {
        tsconfig: 'tsconfig.json'
      }
    },


  

    clean: {
      dist: {
        src: ["ConvertedJSFiles/**/","Reports/**/"]
      }
    },

    protractor: {
  
      host: {
        keepAlive: true,
        options: {
          configFile: "ConvertedJSFiles/E2E/Config/Conf.js",
          args: {
            params: {
              environment: "dev",
              featureKey: grunt.option('featureKey'),
              userName: userName,
              password:password,
              url:`https://${env}.com/#/login`,
              // url:`http://localhost:4200/`,
              training:`https://${env}.com/profile/training`,
              course:`https://${env}.com/#/studentcourseprogress`,
              editpreference:`https://${env}.com/profile/document`,
              emailAddress1:"	rolf.adam@outlook.comd",
              db:{
                host:grunt.option('host'),
                user:grunt.option('user'),
                password:grunt.option('password'),
                database:grunt.option('database'),
              }
            }
          }
        }
      },

      headless: {
        keepAlive: true,
        options: {
          configFile: "ConvertedJSFiles/E2E/Config/Headlessconf.js",
          args: {
            params: {
              environment: "dev",
              featureKey: grunt.option('featureKey'),
              userName: userName,
              password:password,
              url:`https://${env}.com/#/login`,
              training:`https://${env}.com/profile/training`,
              course:`https://${env}.com/#/studentcourseprogress`,
              editpreference:`https://${env}.com/profile/document`,
              emailAddress1:"	rolf.adam@outlook.comd",
              db:{
                host:grunt.option('host'),
                user:grunt.option('user'),
                password:grunt.option('password'),
                database:grunt.option('database'),
              }
            }
          }
        }
      },

      mobile: {
        keepAlive: true,
        options: {
          configFile: "ConvertedJSFiles/E2E/Config/mobileConf.js",
          args: {
            params: {
              environment: "dev",
              featureKey: grunt.option('featureKey'),
              userName: userName,
              password:password,
              url:`https://${env}.com/#/login`,
              training:`https://${env}.com/profile/training`,
              course:`https://${env}.com/#/studentcourseprogress`,
              editpreference:`https://${env}.com/profile/document`,
              emailAddress1:"	rolf.adam@outlook.comd"
            }
          }
        }
      }, //mobileConf

    },

  });

  // Clean Build folder
  grunt.loadNpmTasks('grunt-contrib-clean');

  // // Copy JSON files from data folder to Build/data folder
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Compile the typescript files to es6 javascript files
  grunt.loadNpmTasks("grunt-ts");

  // Update the webdriver-manager
  // grunt.loadNpmTasks('grunt-shell');

  // // Start the webdriver-manger
  // grunt.loadNpmTasks('grunt-protractor-webdriver');
  grunt.loadNpmTasks('grunt-protractor-runner');

  // Listed the task to run
  grunt.registerTask("host", ["clean", "ts", 'protractor:host']);
  grunt.registerTask("headless", ["clean", "ts", 'protractor:headless']);
  grunt.registerTask("mobile", ["clean", "ts", 'protractor:mobile']);
};