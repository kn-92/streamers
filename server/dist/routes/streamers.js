"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var streamers_1 = require("../controllers/streamers");
var router = (0, express_1.Router)();
router.get("/streamers", function (req, res, next) {
    res.status(200).json({ kk: "working" });
    next();
});
router.post("/streamers", streamers_1.postStreamer);
exports.default = router;
