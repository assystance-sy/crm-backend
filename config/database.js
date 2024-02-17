require("dotenv").config();

module.exports = {
  SCHEME: process.env.DB_SCHEME || "mongodb+srv://",
  USERNAME: process.env.DB_USERNAME || "",
  PASSWORD: process.env.DB_PASSWORD || "",
  HOST: process.env.DB_HOST || "",
  DATABASE: process.env.DB_DATABASE || "",
};
