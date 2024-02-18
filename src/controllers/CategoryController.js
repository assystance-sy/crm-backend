const CategoryModel = require("../models/CategoryModel");
const BaseController = require("./BaseController");

class CategoryController extends BaseController {
  constructor() {
    super(CategoryModel);
  }
}

module.exports = CategoryController;
