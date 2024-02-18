const BaseRoutes = require("./BaseRoutes");
const BrandController = require("../controllers/BrandController");

const routes = new BaseRoutes(new BrandController());

routes.getSchema();
routes.getAll();
routes.getOne();
routes.create();
routes.update();
routes.delete();

module.exports = routes.getRouter();
