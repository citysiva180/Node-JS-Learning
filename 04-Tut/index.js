const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

//initialize object
const myEmitter = new MyEmitter();

//add a listner for the log event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  //emit the event
  myEmitter.emit("log", "Log event emitted");
}, 2000);
