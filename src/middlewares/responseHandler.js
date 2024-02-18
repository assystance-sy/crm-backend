const { HTTP_STATUS, ERROR_CODES } = require("../../utils/constants");

/**
 * Sends a success response with optional pagination metadata.
 * @param {Object} res - Express response object.
 * @param {Object} data - Data to be included in the response.
 * @param {number} [statusCode=200] - HTTP status code (default: 200).
 * @param {Object} [pagination={}] - Pagination metadata.
 * @param {number} [pagination.totalPages] - Total number of pages.
 * @param {number} [pagination.totalResources] - Total number of resources.
 * @param {number} [pagination.currentPage] - Current page number.
 */
const sendSuccessResponse = (
  res,
  data,
  pagination = {},
  statusCode = HTTP_STATUS.OK,
) => {
  res.status(statusCode).json({
    success: true,
    data,
    ...pagination,
  });
};

/**
 * Sends an error response.
 * @param {Object} res - Express response object.
 * @param {string} [errorCode="INTERNAL_ERROR"] - Error code (default: "INTERNAL_ERROR").
 * @param {string} [errorMessage="Internal Server Error"] - Error message (default: "Internal Server Error").
 * @param {number} [statusCode=500] - HTTP status code (default: 500).
 */
const sendErrorResponse = (
  res,
  errorCode = ERROR_CODES.INTERNAL_ERROR,
  errorMessage = "Internal Server Error",
  statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR,
) => {
  res.status(statusCode).json({
    success: false,
    error: {
      code: errorCode,
      message: errorMessage,
    },
  });
};

module.exports = (req, res, next) => {
  res.locals.sendSuccessResponse = sendSuccessResponse;
  res.locals.sendErrorResponse = sendErrorResponse;
  next();
};
