const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String },
  address: { type: mongoose.ObjectId, ref: "Address" },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  code: {
    type: String,
    lowercase: true,
    trim: true,
    unique: true,
    required: true,
  },
  merchant: { type: mongoose.ObjectId, ref: "Merchant" },
  remark: { type: String },
});

const model = mongoose.model("Store", schema);

module.exports = model;
