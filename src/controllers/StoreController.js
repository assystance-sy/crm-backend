const StoreModel = require("../models/StoreModel");
const BaseController = require("./BaseController");

class StoreController extends BaseController {
  constructor() {
    super(StoreModel);
  }
}

module.exports = StoreController;
