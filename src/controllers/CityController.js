const CityModel = require("../models/CityModel");
const BaseController = require("./BaseController");

class CityController extends BaseController {
  constructor() {
    super(CityModel);
  }
}

module.exports = CityController;
