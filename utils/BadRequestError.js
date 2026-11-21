const { BAD_REQUEST } = require("./errors");

class BadRequestError extends Error {
  constructor(message = "Bad request") {
    super(message);
    this.statusCode = BAD_REQUEST;
  }
}

module.exports = BadRequestError;
