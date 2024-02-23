const ProductModel = require("../models/ProductModel");
const BaseController = require("./BaseController");
const { parseQueryToRegex } = require("../../utils/functions");

class ProductController extends BaseController {
  constructor() {
    super(ProductModel);
  }

  async getAll(req, res, next) {
    try {
      const {
        page = "1",
        limit = "10",
        populate = [],
        sort = "-_id",
        ...query
      } = req.query;

      const { barcode, sku } = query;

      if (barcode) {
        Object.assign(req.query, { barcode: parseQueryToRegex(barcode) });
      }

      if (sku) {
        Object.assign(req.query, { sku: parseQueryToRegex(sku) });
      }

      return super.getAll(req, res, next);
    } catch (error) {
      // Pass error to error handling middleware
      next(error);
    }
  }
}

module.exports = ProductController;
