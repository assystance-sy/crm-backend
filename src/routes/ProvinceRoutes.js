const BaseRoutes = require("./BaseRoutes");
const ProvinceController = require("../controllers/ProvinceController");

const routes = new BaseRoutes(new ProvinceController());

routes.getSchema();
routes.getAll();
routes.getOne();
routes.create();
routes.update();
routes.delete();

module.exports = routes.getRouter();
