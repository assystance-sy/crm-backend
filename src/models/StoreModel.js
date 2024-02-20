const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    street: { type: String },
    city: { type: mongoose.ObjectId, ref: "City" },
    province: { type: mongoose.ObjectId, ref: "Province" },
    postalCode: { type: String, uppercase: true },
    country: { type: mongoose.ObjectId, ref: "Country" },
  },
  { _id: false },
);

const schema = new mongoose.Schema(
  {
    name: { type: String },
    address: addressSchema,
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
    priority: { type: Number, default: 1, min: 1 },
  },
  { toJSON: { virtuals: true } },
);

schema.virtual("lat").get(function () {
  return this.location.coordinates?.[1];
});

schema.virtual("lng").get(function () {
  return this.location.coordinates?.[0];
});

schema.virtual("staff", {
  ref: "Staff",
  localField: "_id",
  foreignField: "store",
});

const model = mongoose.model("Store", schema);

module.exports = model;
