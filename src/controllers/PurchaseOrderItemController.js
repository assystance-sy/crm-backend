const PurchaseOrderItemModel = require("../models/PurchaseOrderItemModel");
const BaseController = require("./BaseController");

class PurchaseOrderItemController extends BaseController {
  constructor() {
    super(PurchaseOrderItemModel);
  }
}

module.exports = PurchaseOrderItemController;
