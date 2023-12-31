const mongoose = require("mongoose");

// storing the db on mongo atlas
const DB = `mongodb+srv://4mohammedaltaf:WEWbvhnz6hRrL1Kk@habittracker.zadxygx.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection successful!");
  })
  .catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
