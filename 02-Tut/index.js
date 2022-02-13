const fs = require("fs");
const path = require("path");
//Reading file

// Remember important notes when we wrote this function
// You could pass a utf-8 parameter to encode the data directly without converting to string
// Always the data read will be a buffer string!!!! <Buffer 48 69 2c 20 74 68 69 73 20 69 73 20 53 69 76 61>
// Unless you convert it, it aint going to pretty print it!!

//READING A FILE
fs.readFile(path.join(__dirname, "starter.txt"), "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("Hello");

//WRITING A FILE
fs.writeFile(
  path.join(__dirname, "reply.txt"),
  "Writing text using node js is fun",
  (err, data) => {
    if (err) throw err;
    console.log("Operation Complete Write complete");
    //Appending
    fs.appendFile(
      path.join(__dirname, "reply.txt"),
      " Appended text",
      (err) => {
        if (err) throw err;
        console.log("Append Complete");
        //Renaming

        fs.rename(
          path.join(__dirname, "reply.txt"),
          path.join(__dirname, "new_reply.txt"),

          (err) => {
            if (err) throw err;
            console.log("Rename Complete");
          }
        );
      }
    );
  }
);

//APPENDING A FILE

//exit on uncaught errors
//process is an inbuilt module in node which helps in logging errors
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error:${err}`);
  process.exit(1); //exit in 1 second?
});
