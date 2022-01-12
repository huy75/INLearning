# [Node.JS essentials](https://www.linkedin.com/learning-login/share?forceAccount=false&redirect=https://www.linkedin.com/learning/node-js-essential-training-2?trk=share_ent_url&shareId=EBsS0f3uTkukgW5hwlWDgg%253D%253D)

Node.js is a powerful tool for controlling servers, building web applications, and creating event-driven programs. And it takes JavaScript—a language familiar to all web developers—out of the browser. With Node.js, you can build applications that run on your laptop or even the cloud. In this course, learn the essentials of Node.js and start creating your own JavaScript applications. Instructor Alex Banks acquaints you with all of the basics, showing how to install Node.js and work with the Node.js core, which includes standard input, standard output, the module system, the file system, and how to write and run JavaScript on the server. Upon wrapping up this course, you’ll be equipped with fundamental Node.js concepts and techniques that you can put to use in your next project.

## Learning objectives

- What is Node.js?
- Installing Node.js
- The global object
- Importing the core modules
- Creating custom events with the EventEmitter
- Reading, writing, and removing files
- Working with file streams
- Creating child processes with the exec and spawn functions

## Chapter 3 - Node Globals

### Ressources

- Global objects https://nodejs.org/api/globals.html
- Path https://nodejs.org/api/path.html
  - => [globals.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap3/globals.js)
- Process https://nodejs.org/api/process.html
  - argv https://nodejs.org/api/process.html#processargv
  - => [globalProcess.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap3/globalProcess.js)
  - stdin https://nodejs.org/api/process.html#processstdin
  - stdout https://nodejs.org/api/process.html#processstdout
  - => [questions.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap3/questions.js)
  - timers https://nodejs.org/api/timers.html
  - => [timers.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap3/timers.js)

## Chapter 4 - Node Module

- Common modules: https://nodejs.org/api/modules.html
  - Core modules: https://nodejs.org/api/modules.html#core-modules
    (http, url, querystring, path, fs, util...)
    we have to require the utilities modules
  - => [core.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap4/core.js)
- Readline: https://nodejs.org/api/readline.html
  prompt the user and collect their answers
  - => [ask.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap4/ask.js), [questions2.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap4/questions2.js)
- module.exports: https://nodejs.org/api/modules.html#moduleexports
  - => [myModule.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap4/myModule.js) & [app.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap4/app.js)
  - => [questions3.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap4/questions3.js) & [./lib/collectAnswers.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap4/lib/collectAnswers.js) (how to make the done CB optional)
- Event emitter: https://nodejs.org/api/events.html
  => [events.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap4/events.js)
  => [questions4.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap4/questions4.js) & [./lib/collectAnswers4.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap4/lib/collectAnswers4.js)

## Chapter 5 - File System Basics

- File system: https://nodejs.org/api/fs.html
  a module that allows to interact with the file system
  can be used to list files in directories, create new files in directories,
  stream files, watch files, modify file permissions ...
  - readdir => [lists.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap5/lists.js)
  - readFile => [readFile.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap5/readFile.js)
  - writeFile => [writeFile.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap5/writeFile.js)
  - mkdir => [directory.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap5/directory.js)
  - appendFile => [append.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap5/append.js)
  - renameFile & deleteFile => [rename.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap5/rename.js)
  - renameDir & deleteDir => [directories.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap5/directories.js)

## Chapter 6 - Files and Streams

- Readable file streams => [readStream.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap6/readStream.js)
- Writable file streams => [writeStream.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap6/writeStream.js)
- Create child process: https://nodejs.org/api/child_process.html
  - exec: [exec.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap6/exec.js)
  - spawn: [spawn.js](https://github.com/huy75/INLearning/blob/main/Nodejs-essential/chap6/spawn.js)

# Alex Banks
