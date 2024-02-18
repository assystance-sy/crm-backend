const mongoose = require("mongoose");
const { generateSerialNumber } = require("../../utils/functions");

const purchaseOrderItemsSchema = new mongoose.Schema({
  product: { type: mongoose.ObjectId, ref: "Product", required: true },
  packaging: { type: mongoose.ObjectId, ref: "Packaging", required: true },
  quantity: { type: Number, required: true, min: 1, default: 1 },
});

const schema = new mongoose.Schema({
  merchant: { type: mongoose.ObjectId, ref: "Merchant" },
  store: { type: mongoose.ObjectId, ref: "Store" },
  orderNumber: { type: String, unique: true, immutable: true },
  items: [purchaseOrderItemsSchema],
});

schema.pre("save", async function (next) {
  if (!this.orderNumber) {
    const count = await mongoose
      .model("PurchaseOrder")
      .countDocuments({ merchant: this.merchant });

    this.orderNumber = await generateSerialNumber({
      prefix: "PO",
      startAt: count,
    });
  }

  next();
});

const model = mongoose.model("PurchaseOrder", schema);

module.exports = model;
