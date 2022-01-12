const fs = require("fs");

// empty the directory
fs.readdirSync("./storage").forEach((fileName) => {
  fs.unlinkSync(`./storage/${fileName}`);
});

// delete the directory
fs.rmdir("./storage", (err) => {
  if (err) {
    throw err;
  }

  console.log("./storage directory removed");
});
