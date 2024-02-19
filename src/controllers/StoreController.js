const StoreModel = require("../models/StoreModel");
const BaseController = require("./BaseController");
const { formatAddress } = require("../../utils/functions");
const { generateExcel } = require("../services/excelService");

class StoreController extends BaseController {
  constructor() {
    super(StoreModel);
  }

  /**
   * Export a list of stores to an Excel file.
   * @param {object} req - The request object.
   * @param {object} res - The response object.
   * @param {Function} next - The next function.
   * @returns {Promise<void>} - A Promise that resolves after exporting the list to Excel.
   */
  async exportListToExcel(req, res, next) {
    try {
      // Retrieve stores with populated address, city, country, province, and merchant fields
      const stores = await StoreModel.find(req.query).populate([
        "address.city",
        "address.country",
        "address.province",
        "merchant",
      ]);

      // Format the stores data for Excel export
      const formattedStores = stores.map((store) => {
        const { address, merchant, name, code } = store;
        const coordinateQuery = encodeURIComponent(
          `${store.get("lat")},${store.get("lng")}`,
        );
        return {
          Name: name,
          Merchant: merchant?.name || "",
          Code: code,
          Street: address?.street,
          City: address?.city?.name,
          Province: address?.province?.name,
          Country: address?.country?.name,
          "Postal Code": address?.postalCode,
          "Full Address": formatAddress({
            country: address?.country?.name,
            province: address?.province?.name,
            city: address?.city?.name,
            street: address?.street,
            postalCode: address?.postalCode,
          }),
          Lat: store.get("lat"),
          Lng: store.get("lng"),
          "Google Map URL": `https://www.google.com/maps/search/?api=1&query=${coordinateQuery}`,
        };
      });

      // Generate Excel file from the formatted store data
      const excelFile = generateExcel([{ data: formattedStores }]);

      // Send the Excel file as a response
      res.status(200).attachment("Store List.xlsx").send(excelFile);
    } catch (e) {
      // Pass any error to the error handling middleware
      next(e);
    }
  }
}

module.exports = StoreController;
