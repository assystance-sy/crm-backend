const BaseRoutes = require("./BaseRoutes");
const StoreItemController = require("../controllers/StoreItemController");

const routes = new BaseRoutes(new StoreItemController());

routes.getSchema();
routes.getAll();
routes.getOne();
routes.create();
routes.update();
routes.delete();

module.exports = routes.getRouter();
