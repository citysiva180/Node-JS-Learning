//Global Object
console.log("Hello World!");
console.log(global);

//Common JS Modules
const os = require("os");

//Prints the linux version of the os
console.log(os.type());
//Prints the version of the operating system Again linux version
console.log(os.version());
//Prints the location of home directory
console.log(os.homedir());
//prints current directory Name
console.log(__dirname);
//prints the file name
console.log(__filename);
