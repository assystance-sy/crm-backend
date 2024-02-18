const BaseRoutes = require("./BaseRoutes");
const CategoryController = require("../controllers/CategoryController");

const routes = new BaseRoutes(new CategoryController());

routes.getSchema();
routes.getAll();
routes.getOne();
routes.create();
routes.update();
routes.delete();

module.exports = routes.getRouter();
