const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("../../powder-day.mp4");
const writeStream = createWriteStream("./copy.mp4", {
  // take up memory to avoid backpressure
  //highWaterMark: 1628920128
});

readStream.on("data", (chunk) => {
  const result = writeStream.write(chunk);
  if (!result) {
    console.log("backpressure");
    // stop writing
    readStream.pause();
  }
});

readStream.on("error", (error) => {
  console.log("an error occurred", error.message);
});

readStream.on("end", () => {
  writeStream.end();
});

// can resume writing
writeStream.on("drain", () => {
  console.log("drained");
  readStream.resume();
});

writeStream.on("close", () => {
  process.stdout.write("file copied\n");
});
