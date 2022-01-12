// a core module
const events = require("events");

// allow to raise custom events with emit function
const emitter = new events.EventEmitter();

// wire up a handler or a function that will handle custom events
emitter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`);
});

process.stdin.on("data", (data) => {
  // take the user input, convert it to a string, trim that string
  const input = data.toString().trim();
  if (input === "exit") {
    // The first argument that this function takes is the string name of the event
    // The next set of arguments represents the data passed to the handler of the custom event
    emitter.emit("customEvent", "Goodbye!", "process");
    process.exit();
  }
  emitter.emit("customEvent", input, "terminal");
});
