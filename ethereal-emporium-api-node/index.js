const express = require("express");
const app = express();
const mongoose = require("mongoose");
const users = require("./routes/users");
const port = 3500;

mongoose
  .connect("mongodb://localhost/ethereal-emporium")
  .then(() => console.log("Connected to MongoB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.use(express.json());

app.use("/user", users);

app.listen(port, () => console.log(`Listening on port ${port}...`));

// export Ethereal_Emporium_Privatekey=mySecureKey
