const AddressModel = require("../models/AddressModel");
const BaseController = require("./BaseController");

class AddressController extends BaseController {
  constructor() {
    super(AddressModel);
  }
}

module.exports = AddressController;
