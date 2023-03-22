const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://gallery-app.vivifyideas.com",
    env: {
      testUserEmail: "djordje123@gmail.com",
      testUserPassword: "123djordje",
      apiUrl: "https://gallery-api.vivifyideas.com/api",
    },
  },
});