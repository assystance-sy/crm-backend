const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String },
});

const model = mongoose.model("Brand", schema);

module.exports = model;
