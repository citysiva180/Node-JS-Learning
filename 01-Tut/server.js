//Global Object
// console.log("Hello World!");
// console.log(global);

//Common JS Modules
const os = require("os");
const path = require("path");
const math = require("./math");

console.log(math.add(2, 4));

//Destructured import
const { sub } = require("./math");
console.log(sub(2, 6));

// //Prints the linux version of the os
// console.log(os.type());
// //Prints the version of the operating system Again linux version
// console.log(os.version());
// //Prints the location of home directory
// console.log(os.homedir());
// //prints current directory Name
// console.log(__dirname);
// //prints the file name
// console.log(__filename);
// //Print the entire dir and path
// console.log(path.dirname(__filename)); //Super useful!
// //File base name. Remember prints only the file namer
// console.log(path.basename(__filename));
// //print the the file extension name
// console.log(path.extname(__filename)); //Super useful
// //Lets check what this is doing...
// console.log(path.parse(__filename)); //Amazing. Throws and object full of the meta data
