const BaseRoutes = require("./BaseRoutes");
const PurchaseOrderController = require("../controllers/PurchaseOrderController");

const routes = new BaseRoutes(new PurchaseOrderController());

routes.getSchema();
routes.getAll();
routes.getOne();
routes.create();
routes.update();
routes.delete();

module.exports = routes.getRouter();
