const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2",
    retries: 0,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  projectId: "hk3yfp",
  viewportWidth: 1000,
  viewportHeight: 660,
});
