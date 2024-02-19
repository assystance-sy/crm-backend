const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  country: { type: mongoose.ObjectId, ref: "Country" },
  name: { type: String },
  abbreviation: { type: String, uppercase: true, trim: true },
});

const model = mongoose.model("Province", schema);

module.exports = model;
