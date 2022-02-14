const http = require("http");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;
const logEvents = require("./logEvents");
const EventEmitter = require("events");

class Emitter extends EventEmitter {}

const myEmitter = new Emitter();

//Adding the port

const PORT = process.env.PORT || 3500;

//Create a server install with http module
const server = http.createServer((req, res) => {
  //Define the request
  console.log(req.url, req.method);

  //Define the response
});

//Make the server listening to port 3500
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//Emitter and listener are added here.

// myEmitter.on("log", (msg) => logEvents(msg));
// myEmitter.emit("log", "Log event emitted");
