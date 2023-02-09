const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3500;

mongoose
  .connect("mongodb://localhost/ethereal-emporium")
  .then(() => console.log("Connected to MongoB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.listen(port, () => console.log(`Listening on port ${port}...`));
