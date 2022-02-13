const fs = require("fs");

//Creating a directory
fs.mkdir("./new", (err) => {
  if (err) throw err;
  console.log("Directory Created");
});

const fs = require("fs");
//Check and remove directory
if (fs.existsSync("./new1")) {
  fs.rmdir("./new1", (err) => {
    if (err) throw err;
    console.log("Deleting already creating folder");
  });
}

//Check if a folder exists and create folder
if (!fs.existsSync("./new1")) {
  fs.mkdir("./new1", (err) => {
    if (err) throw err;
    console.log("Directory Created");
  });
}
