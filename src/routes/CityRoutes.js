const BaseRoutes = require("./BaseRoutes");
const CityController = require("../controllers/CityController");

const routes = new BaseRoutes(new CityController());

routes.getSchema();
routes.getAll();
routes.getOne();
routes.create();
routes.update();
routes.delete();

module.exports = routes.getRouter();
