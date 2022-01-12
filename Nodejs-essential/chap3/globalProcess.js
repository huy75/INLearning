const grab = (flag) => {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
};

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);

// input: node globalProcess.js --user Jo --greeting Hi
// output: Hi Jo
