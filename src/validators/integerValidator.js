/**
 * Validate if the input is an integer.
 * @param {any} input The input value to validate.
 * @returns {boolean} True if the input is an integer, false otherwise.
 */
module.exports = (input) => {
  // Check if the input is empty or not a number
  if (input === null || input === undefined || input === "") {
    return false;
  }

  // Convert input to a number
  const integerValue = parseInt(input, 10);

  // Check if the number is integer
  return Number.isInteger(integerValue);
};
