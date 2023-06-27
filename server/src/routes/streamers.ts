import { Router } from "express";
import mongoose from "mongoose";

import { postStreamer } from "../controllers/streamers";

const router = Router();

router.get("/streamers", (req, res, next) => {
  res.status(200).json({ kk: "working" });
  next();
});

router.post("/streamers", postStreamer);

export default router;
