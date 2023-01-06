// TODO: What are we importing? importing filesystem module from node js.
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// path to a file will create a file if paht doesn't exist
// data to append to a file
// callback function (function that will run when you call it..)

function appendFileCallback(err) {
err ? console.error(err) : console.log('Commit logged!')
}
fs.appendFile('log.txt', /*`${process.argv[2]}\n`*/, (err) =>
// fs.appendFile('log.txt', appendFileCallback);?????


  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log('Commit logged!')
);