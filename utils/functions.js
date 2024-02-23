const { DateTime } = require("luxon");

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
  const { prefix = "", suffix = "", length = 3, startAt = 0 } = options || {};

  // Calculate the serial number based on the starting value
  const serialNumber = startAt + 1;

  // Get current date
  const currentDate = DateTime.local().toFormat("yyyyMMdd");

  // Construct the serial number with the prefix, serial number, and suffix, padding with leading zeros
  return `${prefix}${currentDate}${serialNumber.toString().padStart(length, "0")}${suffix}`;
}

/**
 * Formats an address into a single string.
 * @param {Object} input - The address object.
 * @param {string} [input.street=""] - The street of the address.
 * @param {string} [input.city=""] - The city of the address.
 * @param {string} [input.province=""] - The province of the address.
 * @param {string} [input.country=""] - The country of the address.
 * @param {string} [input.postalCode=""] - The postal code of the address.
 * @returns {string} The formatted address.
 */
function formatAddress(input = {}) {
  const {
    street = "",
    city = "",
    province = "",
    country = "",
    postalCode = "",
  } = input;

  const fullAddress = [];
  if (street) fullAddress.push(street);
  if (city) fullAddress.push(city);
  if (province) fullAddress.push(province);
  if (country) fullAddress.push(country);
  if (postalCode) fullAddress.push(postalCode);

  return fullAddress.join(", ");
}

/**
 * Parse a search value into a case-insensitive regular expression for text search.
 *
 * @param {string} value - The search value to be parsed into a regular expression.
 * @returns {Object} - A regular expression object suitable for MongoDB queries.
 */
const parseQueryToRegex = (value) => ({
  $regex: new RegExp(
    `^.*${value.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}.*$`,
    "gi",
  ),
});

module.exports = {
  generateSerialNumber,
  formatAddress,
  parseQueryToRegex,
};
