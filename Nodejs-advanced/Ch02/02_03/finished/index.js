const fs = require("fs");

const readStream = fs.createReadStream("../../powder-day.mp4");

// Http requests on the server and a response on the client, are readable streams.
// implement our own instance of a readable stream that already exists

readStream.on("data", (chunk) => {
  console.log("size: ", chunk.length);
});

readStream.on("end", () => {
  console.log("read stream finished");
});

readStream.on("error", (error) => {
  console.log("an error has occured.");
  console.error(error);
});

// pass to the non flowing mode
readStream.pause();
// process.stdin is a readstream
process.stdin.on("data", (chunk) => {
  if (chunk.toString().trim() === "finish") {
    // resume flowing mode
    readStream.resume();
  }
  readStream.read();
});
