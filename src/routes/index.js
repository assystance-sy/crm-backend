const express = require("express");
const router = express.Router();

router.get("/ping", (req, res) => res.locals.sendSuccessResponse(res, "pong"));

module.exports = router;
