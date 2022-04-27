const mongoose = require("mongoose");
var mongodbURL =
  "mongodb+srv://mahesh:mahesh12@cluster0.pucyb.mongodb.net/mern-pizza";

mongoose.connect(mongodbURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var db = mongoose.connection;

db.on("connected", () => console.log("mongodb connected successfully"));
db.on("error", (err) => console.log("mongodb connection error:", err));

module.exports = mongoose;
