const SatffModel = require("../models/SatffModel");
const BaseController = require("./BaseController");

class StaffController extends BaseController {
  constructor() {
    super(SatffModel);
  }
}

module.exports = StaffController;
