const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  country: { type: mongoose.ObjectId, ref: "Country" },
  province: { type: mongoose.ObjectId, ref: "Province" },
  name: { type: String },
});

const model = mongoose.model("City", schema);

module.exports = model;
