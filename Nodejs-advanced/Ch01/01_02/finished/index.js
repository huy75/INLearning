var delay = (seconds) =>
  new Promise((resolves, rejects) => {
    setTimeout(() => {
      // pass the message via this resolves method
      // will then be passed to the function sent to the .then method
      resolves("the long delay has ended");
    }, seconds * 1000);
  });

delay(1)
  .then(console.log)
  .then(() => 42) // the 42 just becomes the argument that's passed to the next then method
  .then((number) => console.log(`Hello world: ${number}`));

console.log("end first tick");
