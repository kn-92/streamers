"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var streamers_1 = require("../controllers/streamers");
var router = (0, express_1.Router)();
// router.get("/streamers", (req, res, next) => {
//   res.status(200).json({ kk: "working" });
//   next();
// });
router.post("/streamers", [
    (0, express_validator_1.body)("name")
        .trim()
        .isLength({ min: 3 })
        .withMessage("Name has to be at least 3 letters long!"),
    (0, express_validator_1.body)("platform")
        .trim()
        .isIn(["Twitch", "YouTube", "TikTok", "Kick", "Rumble"])
        .withMessage("Incorrect platform!"),
    (0, express_validator_1.body)("description")
        .trim()
        .isLength({ min: 3 })
        .withMessage("Description has to be at least 3 letters long!"),
], streamers_1.postStreamer);
exports.default = router;
