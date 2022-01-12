const cp = require("child_process");

// Spawns a shell then executes the command within that shell
// exec buffered output in a small (by default 200K) buffer comparing to spawn
// exec handles synchronous processes
cp.exec("node readStream", (err, data, stderr) => {
  console.log(data);
});
