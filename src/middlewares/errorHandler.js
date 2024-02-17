const { HTTP_STATUS, ERROR_CODES } = require("../../utils/constants");

module.exports = (error, res) => {
  let code = ERROR_CODES.INTERNAL_ERROR;
  let statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR;
  let message = "Internal Server Error";

  if (error.code) code = error.code;
  if (error.statusCode) statusCode = error.statusCode;
  if (error.message) message = error.message;

  console.error(`[${code}] ${message}`);
  console.error(error.stack);

  res.locals.sendErrorResponse(res, code, message, statusCode);
};
