console.log("Hello NodeJS - LAB 03");

const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

const fs1 = require('fs');

fs1.writeFile('file.txt', 'Hello World!', (err) => {
  if (err) throw err;
  console.log('File saved!');
});