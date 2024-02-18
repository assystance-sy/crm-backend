const BaseRoutes = require("./BaseRoutes");
const AddressController = require("../controllers/AddressController");

const routes = new BaseRoutes(new AddressController());

routes.getSchema();
routes.getAll();
routes.getOne();
routes.create();
routes.update();
routes.delete();

module.exports = routes.getRouter();
