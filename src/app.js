const bodyParser = require("body-parser");
const express = require("express");
const config = require("../config");
const compression = require("compression");
const { responseHandler, errorHandler } = require("./middlewares");
const routes = require("./routes");
const { startupDb } = require("../scripts");

const app = express();

startupDb()
  .then(() => console.log(`MongoDB Connected`))
  .catch((e) => console.error(`Error connecting to MongoDB: ${e.message}`));

app.use(bodyParser.json());
app.use(compression());
app.use(responseHandler);
app.use("/api/v1", routes);
app.use(errorHandler);

app.listen(config.server.PORT, () => {
  console.log(`Listening on port ${config.server.PORT}`);
});
