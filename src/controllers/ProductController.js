const ProductModel = require("../models/ProductModel");
const BaseController = require("./BaseController");

class ProductController extends BaseController {
  constructor() {
    super(ProductModel);
  }
}

module.exports = ProductController;
