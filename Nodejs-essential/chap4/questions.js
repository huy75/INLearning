const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
  ];
  
const ask = (i = 0) => {
process.stdout.write(`\n\n\n ${questions[i]}`);
process.stdout.write(` > `);
};
  
ask();
  
const answers = [];
// the on function listens to events
// the first argument is the event name
// the second argument is the on function handler
// the data is passed as a buffer or a binary. Needs to use toString
// trim to remove leading spaces
process.stdin.on("data", data => {
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
