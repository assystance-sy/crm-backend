const MerchantModel = require("../models/MerchantModel");
const BaseController = require("./BaseController");

class MerchantController extends BaseController {
  constructor() {
    super(MerchantModel);
  }
}

module.exports = MerchantController;
