var fs = require("fs");

// a function used to convert callback functions into promises
var { promisify } = require("util");

// turn writeFile into a promise
var writeFile = promisify(fs.writeFile);

writeFile("sample.txt", "This is a sample")
  .then(() => console.log("file successfully created"))
  .catch((error) => console.log("error creating file"));
