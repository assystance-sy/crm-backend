const { ERROR_CODES } = require("./constants");

class NotFoundError extends Error {
  constructor(message) {
    super(message || "Not Found");
    this.name = this.constructor.name;
    this.statusCode = 404;
    this.code = ERROR_CODES.RESOURCE_NOT_FOUND;
  }
}

class InternalServerError extends Error {
  constructor(message) {
    super(message || "Internal Server Error");
    this.name = this.constructor.name;
    this.statusCode = 500;
    this.code = ERROR_CODES.INTERNAL_ERROR;
  }
}

module.exports = {
  NotFoundError,
  InternalServerError,
};
