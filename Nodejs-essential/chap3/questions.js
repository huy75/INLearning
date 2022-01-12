const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?",
];

// console log adds a new line for each message
// The process stdout.write method gives us a little bit more control over the string

const ask = (i = 0) => {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(` > `);
};

ask();

const answers = [];

// use the on function to listen for events
// the first argument is the event name
// the second argument of the on function is the handler
// or the function that we will use to handle that data
process.stdin.on("data", (data) => {
  //  the data is currently passed as a buffer or a binary,
  // so we have to call .tostring on it
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  const [name, activity, lang] = answers;
  console.log(`
  
Thank you for your anwsers.

Go ${activity} ${name} you can write ${lang} code later!!!

  
  `);
});
