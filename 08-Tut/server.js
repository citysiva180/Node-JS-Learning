const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/ErrorHandler");
const PORT = process.env.PORT || 3500;

//Custom Middleware logger
app.use(logger);
//Cross origin resource sharing...
const whitelist = [
  "https://www.yoursite.com",
  "http://127.0.0.1:5500",
  "http://localhost:3500",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
//built-in middleware to handle urlencoded data
// in other words, form data;
//'content-type: application/x-www-form-urlencoded

app.use(express.urlencoded({ extended: false }));

//built-in middleware for json

app.use(express.json());

//serve static files
app.use(express.static(path.join(__dirname, "/public")));

app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

//This would be a middle ware...

app.get("/new-page.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

//AWESOME REDIRECTION USING EXPRESS

app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html"); //302 by default
  //you could specify the error code by passing it as a parameter
});

//So is this.... A Middle ware...
//Route handlers | Chained routing
app.get(
  "/hello(.html)?",
  (req, res, next) => {
    console.log("attempted to load hello.html");
    next(); //moves to the next handler
  },
  (req, res) => {
    res.send("Hello world");
  }
);

//Making changes now...!!

//This is different

//chainging route handlers

const one = (req, res, next) => {
  console.log("one");
  next();
};
const two = (req, res, next) => {
  console.log("two");
  next();
};

const three = (req, res) => {
  console.log("three");
  res.send("Finished!");
};

//Use an array to pass the handlers in the express routing function
app.get("chain(.html)?", [one, two, three]);

//by default if a path is not mentioned in any of the above routes, we get to a 404
//To custom build a 404, you will need to add the status(404) function to make it happen
app.get("*", (req, res) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not found" });
  } else {
    res.type("txt").send("404 Not found");
  }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
