const UPCA_PATTERN = /^[0-9]{12}$/; // 12 digits
const CODE_128_PATTERN = /^[A-Za-z0-9]+$/; // Alphanumeric characters for Code 128

/**
 * Validate barcode format.
 * @param {string} input The input string to validate as a barcode.
 * @returns {boolean} True if the input matches either UPC-A or Code 128 pattern, false otherwise.
 */
module.exports = (input) => {
  // Check if the input is a string and not empty
  if (typeof input !== "string" || input.trim() === "") return false;

  // Test if the barcode matches either UPC-A or Code 128 pattern
  if (UPCA_PATTERN.test(input)) return true;
  return CODE_128_PATTERN.test(input);
};
