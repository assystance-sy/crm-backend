/**
 * Generates a serial number with customizable prefix, suffix, length, and starting value.
 * @param {Object} [options={}] - Additional options for customizing the serial number.
 * @param {string} [options.prefix=""] - The prefix to prepend to the serial number.
 * @param {string} [options.suffix=""] - The suffix to append to the serial number.
 * @param {number} [options.length=8] - The length of the serial number.
 * @param {number} [options.startAt=0] - The starting value of the serial number.
 * @returns {string} The generated serial number.
 */
function generateSerialNumber(options = {}) {
  const { prefix = "", suffix = "", length = 8, startAt = 0 } = options || {};

  // Calculate the serial number based on the starting value
  const serialNumber = startAt + 1;

  // Construct the serial number with the prefix, serial number, and suffix, padding with leading zeros
  return `${prefix}${serialNumber.toString().padStart(length, "0")}${suffix}`;
}

module.exports = {
  generateSerialNumber,
};
