const fs = require("fs");
const path = require("path");
const rs = fs.createReadStream(path.join(__dirname, "lorem.txt"), {
  encoding: "utf-8",
});
const ws = fs.createWriteStream(path.join(__dirname, "new_file.txt"));

// rs.on("data", (dataChunk) => {
//   ws.write(dataChunk);
// });

//better pipe it!

rs.pipe(ws);
