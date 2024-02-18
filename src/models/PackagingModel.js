const mongoose = require("mongoose");
const { integerValidator } = require("../validators");
const { packagingTypes } = require("../enums");

const schema = new mongoose.Schema({
  type: {
    type: String,
    enum: Object.values(packagingTypes),
    default: packagingTypes.OTHER,
  },
  product: { type: mongoose.ObjectId, ref: "Product" },
  quantity: {
    type: Number,
    default: 1,
    min: 1,
    validate: (value) => integerValidator(value),
  },
});

const model = mongoose.model("Packaging", schema);

module.exports = model;
