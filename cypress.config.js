const{defineConfig}=require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

async function setupNodeEvents(on, config){
  
on('file:preprocessor', cucumber())
return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/Integration/day1basics/pagetest/*.js'

    //specPattern: 'cypress/Integration/day1basics/basics/assertion/*.js',
    //specPattern: 'cypress/UAT/Feature/*.feature'
  },
});