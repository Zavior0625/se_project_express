const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { errors } = require("celebrate");
const { requestLogger, errorLogger } = require("./middlewares/logger");

const routes = require("./routes");

const { PORT = 3001, MONGO_URL = "mongodb://127.0.0.1:27017/wtwr_db" } =
  process.env;

const app = express();
const errorHandler = require("./middlewares/errorHandler");
const NotFoundError = require("./utils/NotFoundError");

mongoose.connect(MONGO_URL);

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use("/", routes);

app.use((req, res, next) => {
  next(new NotFoundError("Requested resource not found"));
});

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

app.listen(PORT);
