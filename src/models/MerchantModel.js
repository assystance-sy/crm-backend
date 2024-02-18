const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String },
  code: { type: String, unique: true },
});

const model = mongoose.model("Merchant", schema);

module.exports = model;
