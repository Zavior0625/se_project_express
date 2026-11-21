const { NOT_FOUND } = require("./errors");

class NotFoundError extends Error {
  constructor(message = "Requested resource not found") {
    super(message);
    this.statusCode = NOT_FOUND;
  }
}

module.exports = NotFoundError;
