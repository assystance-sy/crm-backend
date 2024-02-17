const mongoose = require("mongoose");
const {
  database: { SCHEME, USERNAME, PASSWORD, HOST, DATABASE },
} = require("../config");

const startupDb = async () => {
  const connectionString = `${SCHEME}${USERNAME}:${PASSWORD}@${HOST}${DATABASE}`;
  await mongoose.connect(connectionString);
};

module.exports = startupDb;
