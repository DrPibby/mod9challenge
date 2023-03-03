const fs = require("fs");
const textFile = process.argv[2];


fs.writeFile("wow.txt", textFile, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });