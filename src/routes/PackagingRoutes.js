const BaseRoutes = require("./BaseRoutes");
const PackagingController = require("../controllers/PackagingController");

const routes = new BaseRoutes(new PackagingController());

routes.getSchema();
routes.getAll();
routes.getOne();
routes.create();
routes.update();
routes.delete();

module.exports = routes.getRouter();
