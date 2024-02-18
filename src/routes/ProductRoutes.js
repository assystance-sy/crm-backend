const BaseRoutes = require("./BaseRoutes");
const ProductController = require("../controllers/ProductController");

const routes = new BaseRoutes(new ProductController());

routes.getSchema();
routes.getAll();
routes.getOne();
routes.create();
routes.update();
routes.delete();

module.exports = routes.getRouter();
