const { HTTP_STATUS, ERROR_CODES } = require("../../utils/constants");

/**
 * Error handling middleware for handling uncaught errors during the request-response cycle.
 * @param {Error} error - The error object.
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The next middleware function.
 */
module.exports = (error, req, res, next) => {
  let code = ERROR_CODES.INTERNAL_ERROR;
  let statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR;
  let message = "Internal Server Error";

  // Override default values with values from the error object if available
  if (error.code) code = error.code;
  if (error.statusCode) statusCode = error.statusCode;
  if (error.message) message = error.message;

  // Log the error details
  console.error(`[${code}] ${message}`);
  console.error(error.stack);

  // Send error response to the client
  res.locals.sendErrorResponse(res, code, message, statusCode);
};
