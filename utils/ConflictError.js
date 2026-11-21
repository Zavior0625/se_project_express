const { CONFLICT } = require("./errors");

class ConflictError extends Error {
  constructor(message = "Resource already exists") {
    super(message);
    this.statusCode = CONFLICT;
  }
}

module.exports = ConflictError;
