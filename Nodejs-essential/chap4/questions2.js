const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you going to do with node js? ",
];

const collectAnswers = (questions, done) => {
  const answers = [];
  const [firstQuestion] = questions;

  const questionAnswered = (answer) => {
    answers.push(answer);
    if (answers.length < questions.length) {
      //  readline, the first argument is the string,
      // and the second argument is a function that will be invoked once the question is answered
      // this is a way to loop
      rl.question(questions[answers.length], questionAnswered);
    } else {
      done(answers);
    }
  };

  rl.question(firstQuestion, questionAnswered);
};

collectAnswers(questions, (answers) => {
  console.log("Thank you for your answers. ");
  console.log(answers);
  process.exit();
});
