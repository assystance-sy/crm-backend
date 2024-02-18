const BaseRoutes = require("./BaseRoutes");
const CountryController = require("../controllers/CountryController");

const routes = new BaseRoutes(new CountryController());

routes.getSchema();
routes.getAll();
routes.getOne();
routes.create();
routes.update();
routes.delete();

module.exports = routes.getRouter();
