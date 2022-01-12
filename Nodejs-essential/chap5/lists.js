const fs = require("fs");

// reads the contents of a directory in asynchronous / non blocking mode
// files is an array of the names of the files in the directory excluding '.' and '..'
fs.readdir("./assets", (err, files) => {
  if (err) {
    throw err;
  }
  console.log("complete");
  console.log(files);
});

console.log("started reading files");
