const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin, // The Readable stream to listen to. This option is required.
  output: process.stdout, // The Writable stream to write readline data to.
});

rl.question("How do you like Node? ", (answer) => {
  console.log(`Your answer: ${answer}`);
});
