const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  street: { type: String },
  city: { type: String },
  province: { type: mongoose.ObjectId, ref: "Province" },
  postalCode: { type: String, uppercase: true },
  country: { type: mongoose.ObjectId, ref: "Country" },
});

const model = mongoose.model("Address", schema);

module.exports = model;
