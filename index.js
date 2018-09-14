#! /usr/bin/env node
var  userArgs = process.argv.slice(2);
var fileName = userArgs[0];
var fs = require('fs');

fs.writeFile('fileName.txt', fileName, (err) => {
    if(err) throw err;
    console.log('Create text file');
});
