const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, default: "Canada" },
  code: {
    type: String,
    default: "CA",
    unique: true,
    uppercase: true,
    trim: true,
  },
});

const model = mongoose.model("Country", schema);

module.exports = model;
