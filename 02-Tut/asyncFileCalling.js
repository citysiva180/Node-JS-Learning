const fsPromises = require("fs").promises;
const path = require("path");

//best way to read and write files in Node.js
const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "starter.txt"),
      "utf8"
    );
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fileOps();
