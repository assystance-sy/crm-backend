const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String },
  abbreviation: { type: String, uppercase: true, trim: true },
});

const model = mongoose.model("Province", schema);

module.exports = model;
