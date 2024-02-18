const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  merchant: { type: mongoose.ObjectId, ref: "Merchant" },
  store: { type: mongoose.ObjectId, ref: "Store" },
  product: { type: mongoose.ObjectId, ref: "Product" },
  sku: { type: String, trim: true },
});

schema.index({ store: 1, sku: 1 }, { unique: true });

const model = mongoose.model("StoreItem", schema);

module.exports = model;
