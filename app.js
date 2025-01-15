const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");

const app = express();

require("dotenv").config();

app.use(express.json());

mongoose
  .connect(process.env.Mongo_Uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

app.use(userRouter);

const Port = process.env.PORT;
app.listen(Port, () => {
  console.log(`your server is running on port: ${Port}`);
});
