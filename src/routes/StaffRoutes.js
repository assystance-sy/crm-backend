const BaseRoutes = require("./BaseRoutes");
const StaffController = require("../controllers/StaffController");

const routes = new BaseRoutes(new StaffController());

routes.getSchema();
routes.getAll();
routes.getOne();
routes.create();
routes.update();
routes.delete();

module.exports = routes.getRouter();
