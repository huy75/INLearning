# [Node.JS advanced](https://www.linkedin.com/learning/advanced-node-js/using-the-exercise-files?autoAdvance=true&autoSkip=true&autoplay=true&resume=false)

Learn advanced techniques for asynchronous programming and data streaming in Node.js. In this course, instructor Alex Banks shows how to use asynchronous patterns such as callbacks, promises, and async/await to manage processes and enforce sequential, parallel, and concurrent execution. He then reviews streams, a critical feature for reading and writing data from Node applications. He introduces the four different types of streams—readable, writeable, duplex, and transform—and shows how to minimize backpressure, or buildup, in data transmission. In the final section, Alex shows how to combine the techniques and build an HTTP server for streaming video over the web. Learn how to ensure the stream is cross-browser compatible and collect multipart/form-data, such as text data and files, from the upload stream. By the end of the course, you'll have a powerful new toolset for building advanced, enterprise-scale applications with Node.js.

## Learning objectives

- Asynchronous patterns
- Resolving and rejecting promises
- Sequential, parallel, and concurrent execution
- Working with readable and writeable streams
- Transforming streams
- HTTP streaming

## Chapter 1 - Asynchronous patterns

- [Promisify](https://nodejs.org/api/util.html#utilpromisifyoriginal) => index.js
- Async/Await
- Parallel execution with promise.all and promise.race
- Promise queue of concurrent tasks

## Chapter 2 - Advanced Streams

- CreateReadStream: to read chunk by chunk, save memory
- [ReadableStream](https://nodejs.org/api/stream.html#class-streamreadable): build a readstream
- Using existing readstream (http request): implement our own instance of a readable stream that already exists
- [WritableStream](https://nodejs.org/api/stream.html#class-streamwritable):
- [Backpressure](https://nodejs.org/en/docs/guides/backpressuring-in-streams/):
- Piping streams: the pipe function allows us to pipe data from any readable stream to any writable stream
  cat anyfile.txt | node .
- DuplexStream
- TransformStream: used to transform data from readable streams before they are sent to writable streams

## Chapter 3 - HTTP Streaming

Implemente a web server that handles upload and download streams

- Streaming video to the browser
- Handling range requests: stream content to the browser
- Forking and uploading streams: stream content from the browser
- Parsing multipart/form-data: upload

# Alex Banks
