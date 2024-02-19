const mongoose = require("mongoose");
const { generateSerialNumber } = require("../../utils/functions");

const schema = new mongoose.Schema({
  merchant: { type: mongoose.ObjectId, ref: "Merchant" },
  store: { type: mongoose.ObjectId, ref: "Store" },
  orderNumber: { type: String, unique: true, immutable: true, required: true },
});

schema.virtual("items", {
  ref: "PurchaseOrderItem",
  localField: "_id",
  foreignField: "purchaseOrder",
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
