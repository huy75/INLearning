console.log(__dirname)
console.log(__filename)

// node global.js Huy Nguyen
// const [,,first, last] = process.argv
// console.log(first, last)

// node global.js --user Ned --greeting "Hidely hoe"

const grab = flag => {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
	return process.argv[indexAfterFlag]
}

const greeting = grab("--greeting")
const user = grab("--user")
console.log(greeting, user)