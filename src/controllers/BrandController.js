const BrandModel = require("../models/BrandModel");
const BaseController = require("./BaseController");

class BrandController extends BaseController {
  constructor() {
    super(BrandModel);
  }
}

module.exports = BrandController;
