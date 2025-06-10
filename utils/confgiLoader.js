//utils/ConfigLoader.js

const fs = require('fs');
const path = require('path');

function loadConfig(env = 'stage') {
  const filePath = path.join(__dirname, '../config', `${env}.config.json`);
  return JSON.parse(fs.readFileSync(filePath));
}

module.exports = { loadConfig };
