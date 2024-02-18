const StoreItemModel = require("../models/StoreItemModel");
const BaseController = require("./BaseController");

class StoreItemController extends BaseController {
  constructor() {
    super(StoreItemModel);
  }
}

module.exports = StoreItemController;
