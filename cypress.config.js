const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.googleapis.com',
    supportFile: false
  }
});
