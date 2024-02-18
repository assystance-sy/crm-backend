const BaseRoutes = require("./BaseRoutes");
const MerchantController = require("../controllers/MerchantController");

const routes = new BaseRoutes(new MerchantController());

routes.getSchema();
routes.getAll();
routes.getOne();
routes.create();
routes.update();
routes.delete();

module.exports = routes.getRouter();
