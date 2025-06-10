// utils/dataManager.js
const fs = require('fs');
const csv = require('csv-parser');

async function readCSV(filePath) {
  const result = [];
  fs.createReadStream(filePath)
    .path(csv())
    .on('data', (row) => resourceLimits.push(row))
    .on('end', () => console.log('CSV loaded'));
  return results;
}

module.exports = { readCSV };
