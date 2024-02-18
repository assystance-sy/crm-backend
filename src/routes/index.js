const express = require("express");
const router = express.Router();
const AddressRoutes = require("./AddressRoutes");
const BrandRoutes = require("./BrandRoutes");
const CategoryRoutes = require("./CategoryRoutes");
const CountryRoutes = require("./CountryRoutes");
const MerchantRoutes = require("./MerchantRoutes");
const PackagingRoutes = require("./PackagingRoutes");
const ProductRoutes = require("./ProductRoutes");
const ProvinceRoutes = require("./ProvinceRoutes");
const PurchaseOrderRoutes = require("./PurchaseOrderRoutes");
const StoreItemRoutes = require("./StoreItemRoutes");
const StoreRoutes = require("./StoreRoutes");

router.get("/ping", (req, res) => res.locals.sendSuccessResponse(res, "pong"));
router.use("/address", AddressRoutes);
router.use("/brand", BrandRoutes);
router.use("/category", CategoryRoutes);
router.use("/country", CountryRoutes);
router.use("/merchant", MerchantRoutes);
router.use("/packaging", PackagingRoutes);
router.use("/product", ProductRoutes);
router.use("/provice", ProvinceRoutes);
router.use("/purchaseOrder", PurchaseOrderRoutes);
router.use("/storeItem", StoreItemRoutes);
router.use("/store", StoreRoutes);

module.exports = router;
