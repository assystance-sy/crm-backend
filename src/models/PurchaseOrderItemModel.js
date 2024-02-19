const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  merchant: { type: mongoose.ObjectId, ref: "Merchant" },
  store: { type: mongoose.ObjectId, ref: "Store" },
  purchaseOrder: {
    type: mongoose.ObjectId,
    ref: "PurchaseOrder",
    required: true,
  },
  product: { type: mongoose.ObjectId, ref: "Product", required: true },
  packaging: { type: mongoose.ObjectId, ref: "Packaging", required: true },
  quantity: { type: Number, required: true, min: 1, default: 1 },
});

const model = mongoose.model("PurchaseOrderItem", schema);

module.exports = model;
