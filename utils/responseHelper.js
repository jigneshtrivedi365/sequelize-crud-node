/**
 * Sends a success response.
 * @param {Object} res - The response object.
 * @param {string} message - The success message.
 * @param {Object} [data={}] - Optional data to include in the response.
 * @param {number} [statusCode=200] - HTTP status code.
 */
const sendSuccess = (res, message, data = {}, statusCode = 200) => {
    res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};

/**
 * Sends an error response.
 * @param {Object} res - The response object.
 * @param {string} message - The error message.
 * @param {Object} [error={}] - Optional error details.
 * @param {number} [statusCode=500] - HTTP status code.
 */
const sendError = (res, message, error = {}, statusCode = 500) => {
    res.status(statusCode).json({
        success: false,
        message,
        error,
    });
};

module.exports = {
    sendSuccess,
    sendError,
};
