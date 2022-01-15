const { Transform } = require("stream");

class ReplaceText extends Transform {
  constructor(char) {
    super();
    this.replaceChar = char;
  }

  _transform(chunk, encoding, callback) {
    const transformChunk = chunk
      .toString()
      // g as global
      .replace(/[a-z]|[A-Z]|[0-9]/g, this.replaceChar);
    this.push(transformChunk);
    callback();
  }

  _flush(callback) {
    this.push("more stuff is being passed...");
    callback();
  }
}

var xStream = new ReplaceText("XX");
// send that through standard input, it gets piped through my transform stream,
// to standard output
process.stdin.pipe(xStream).pipe(process.stdout);
