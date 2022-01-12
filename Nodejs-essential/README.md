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
  - => globals.js
- Process https://nodejs.org/api/process.html
  - argv https://nodejs.org/api/process.html#processargv
  - => globalProcess.js
  - stdin https://nodejs.org/api/process.html#processstdin
  - stdout https://nodejs.org/api/process.html#processstdout
  - => questions.js
  - timers https://nodejs.org/api/timers.html
  - => timers.js

## Chapter 4 - Node Module

- Common modules: https://nodejs.org/api/modules.html
  - Core modules: https://nodejs.org/api/modules.html#core-modules
    (http, url, querystring, path, fs, util...)
    we have to require the utilities modules
    - => core.js
- Readline: https://nodejs.org/api/readline.html
  prompt the user and collect their answers
  - => ask.js, questions2.js
- module.exports: https://nodejs.org/api/modules.html#moduleexports
  - => myModule.js & app.js
  - => questions3.js & ./lib/collectAnswers.js (how to make the done CB optional)
- Event emitter: https://nodejs.org/api/events.html
  => events.js
  => questions4.js & ./lib/collectAnswers4.js

## Chapter 5 - File System Basics

- File system: https://nodejs.org/api/fs.html
  a module that allows to interact with the file system
  can be used to list files in directories, create new files in directories,
  stream files, watch files, modify file permissions ...
  - readdir => lists.js
  - readFile => readFile.js
  - writeFile => writeFile.js
  - mkdir => directory.js
  - appendFile => append.js
  - renameFile & deleteFile => rename.js
  - renameDir & deleteDir => directories.js

## Chapter 6 - Files and Streams

- Readable file streams => readStream.js
- Writable file streams => writeStream.js
- Create child process: https://nodejs.org/api/child_process.html
  - exec: exec.js
  - spawn: spawn.js

# Alex Banks
