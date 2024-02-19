const BaseRoutes = require("./BaseRoutes");
const PurchaseOrderItemController = require("../controllers/PurchaseOrderItemController");

const routes = new BaseRoutes(new PurchaseOrderItemController());

routes.getSchema();
routes.getAll();
routes.getOne();
routes.create();
routes.update();
routes.delete();

module.exports = routes.getRouter();
