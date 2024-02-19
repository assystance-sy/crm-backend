const xlsx = require("xlsx");

/**
 * Generate an Excel file from an array of sheet data.
 * @param {Array<object>} sheets - Array of sheet objects containing data to be included in the Excel file.
 * Each sheet object should have a 'data' property containing the data to be included in the sheet.
 * @returns {Buffer} - Excel file content as a buffer.
 */
function generateExcel(sheets = []) {
  const workbook = xlsx.utils.book_new();
  sheets.forEach((sheet, index) => {
    const worksheet = xlsx.utils.json_to_sheet(sheet.data);
    xlsx.utils.book_append_sheet(
      workbook,
      worksheet,
      sheet.name || `Sheet ${index + 1}`,
    );
  });
  return xlsx.write(workbook, { type: "buffer" });
}

module.exports = {
  generateExcel,
};
