const CountryModel = require("../models/CountryModel");
const BaseController = require("./BaseController");

class CountryController extends BaseController {
  constructor() {
    super(CountryModel);
  }
}

module.exports = CountryController;
