const ProvinceModel = require("../models/ProvinceModel");
const BaseController = require("./BaseController");

class ProvinceController extends BaseController {
  constructor() {
    super(ProvinceModel);
  }
}

module.exports = ProvinceController;
