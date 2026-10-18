const express = require("express");
const mongoose = require("mongoose");

const usersRouter = require("./routes/users");
const clothingItemsRouter = require("./routes/clothingItems");
const { NOT_FOUND } = require("./utils/errors");

const { PORT = 3001 } = process.env;

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db");

app.use(express.json());

app.use("/users", usersRouter);

app.use((req, res, next) => {
  req.user = {
    _id: "6acfdb7f0dc9f8fd4ef9c191",
  };
  next();
});

app.use("/items", clothingItemsRouter);

app.use((req, res) => {
  res.status(NOT_FOUND).send({
    message: "Requested resource not found",
  });
});

app.listen(PORT);
