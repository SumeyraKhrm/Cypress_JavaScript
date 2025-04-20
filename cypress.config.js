const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'm9dtvf',
  viewportHeight:1000,
  viewportWidth:1200,


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl:"http://wisequarter.com",  //oncelikle baseurl tanimliyoruz
    projectId: "m9dtvf",
    "video": false, //video kaydin alinmasini engeller
    "retire":2,  //fail olan testlerin 2 kes calismanini saglar

  },

});
