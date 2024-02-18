const PackagingModel = require("../models/PackagingModel");
const BaseController = require("./BaseController");

class PackagingController extends BaseController {
  constructor() {
    super(PackagingModel);
  }
}

module.exports = PackagingController;
