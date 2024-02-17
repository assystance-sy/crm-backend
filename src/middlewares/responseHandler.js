const { HTTP_STATUS, ERROR_CODES } = require("../../utils/constants");

const sendSuccessResponse = (
  res,
  data,
  statusCode = HTTP_STATUS.OK,
  pagination = {},
) => {
  res.status(statusCode).json({
    success: true,
    data,
    ...pagination,
  });
};

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
