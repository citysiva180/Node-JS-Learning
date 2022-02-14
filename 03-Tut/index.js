const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

//Date time formatting
console.log(format(new Date(), "yyyy-MM-dd\tHH:mm:ss"));
console.log("hello");

//V4UUID
console.log(uuid());
console.log(uuid());
