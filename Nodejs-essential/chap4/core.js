// import the core module path
const path = require("path");

// utilities model logs our strings to console like the console log would
// but every log has a date and time stamp associated with it
// destructure the only function needed
const { log } = require("util");

const { getHeapStatistics } = require("v8");

log(getHeapStatistics());
