const mongoose = require("mongoose");
const { phoneLabels } = require("../enums");

const phoneSchema = new mongoose.Schema({
  label: {
    type: String,
    enums: Object.values(phoneLabels),
    default: phoneLabels.MOBILE,
  },
  number: { type: String },
});

const schema = new mongoose.Schema({
  merchant: { type: mongoose.ObjectId, ref: "Merchant" },
  store: { type: mongoose.ObjectId, ref: "Store" },
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String },
  phones: [phoneSchema],
  remark: { type: String },
});

const model = mongoose.model("Staff", schema);

module.exports = model;
