const BaseRoutes = require("./BaseRoutes");
const StoreController = require("../controllers/StoreController");

const routes = new BaseRoutes(new StoreController());

routes.extendRoutes((router, controller) => {
  router.get("/export/excel", controller.exportListToExcel.bind(controller));
});

routes.getSchema();
routes.getAll();
routes.getOne();
routes.create();
routes.update();
routes.delete();

module.exports = routes.getRouter();
