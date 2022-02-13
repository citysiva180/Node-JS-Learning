const fsPromises = require("fs").promises;
const { deepStrictEqual } = require("assert");
const path = require("path");

//best way to read and write files in Node.js
const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "starter.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromises.writeFile(path.join(__dirname, "promiseWrite.txt"), data);
    await fsPromises.appendFile(
      path.join(__dirname, "promiseWrite.txt"),
      "Nice to meet you appeneded text!"
    );
    await fsPromises.rename(
      path.join(__dirname, "promiseWrite.txt"),
      path.join(__dirname, "promiseComplete.txt")
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "promiseComplete.txt"),
      "utf-8"
    );
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
};

fileOps();
