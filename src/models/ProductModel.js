const mongoose = require("mongoose");
const { barcodeValidator, integerValidator } = require("../validators");

const schema = new mongoose.Schema(
  {
    name: { type: String },
    brand: { type: mongoose.ObjectId, ref: "Brand" },
    barcode: {
      type: String,
      required: true,
      immutable: true,
      unique: true,
      index: true,
      validate: (value) => barcodeValidator(value),
      trim: true,
    },
    sku: { type: String, unique: true, trim: true },
    category: { type: mongoose.ObjectId, ref: "Category" },
    image: { type: String },
    priority: {
      type: Number,
      default: 1,
      min: 1,
      validate: (value) => integerValidator(value),
    },
    weight: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true },
);

const model = mongoose.model("Product", schema);

module.exports = model;
