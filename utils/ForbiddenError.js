const { FORBIDDEN } = require("./errors");

class ForbiddenError extends Error {
  constructor(message = "Access forbidden") {
    super(message);
    this.statusCode = FORBIDDEN;
  }
}

module.exports = ForbiddenError;
