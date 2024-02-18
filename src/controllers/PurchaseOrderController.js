const PurchaseOrderModel = require("../models/PurchaseOrderModel");
const BaseController = require("./BaseController");

class PurchaseOrderController extends BaseController {
  constructor() {
    super(PurchaseOrderModel);
  }
}

module.exports = PurchaseOrderController;
