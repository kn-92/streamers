import { Router } from "express";

import { body } from "express-validator";

import { postStreamer, getStreamers } from "../controllers/streamers";

const router = Router();
// GET /streamers
router.get("/streamers", getStreamers);

// POST /streamers
router.post(
  "/streamers",
  [
    body("name")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Name has to be at least 3 letters long!"),
    body("platform")
      .trim()
      .isIn(["Twitch", "YouTube", "TikTok", "Kick", "Rumble"])
      .withMessage("Incorrect platform!"),
    body("description")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Description has to be at least 3 letters long!"),
  ],
  postStreamer
);

export default router;
