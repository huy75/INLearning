const fs = require("fs");
const colorData = require("./assets/colors.json");

colorData.colorList.forEach((c) => {
  // Asynchronously append data to a file, creating the file if it does not yet exist.
  // data can be a string or a <Buffer>.
  fs.appendFile(
    "./storage-files/colors.md",
    `${c.color}: ${c.hex} \n`,
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
});
