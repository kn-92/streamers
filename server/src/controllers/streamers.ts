import { RequestHandler } from "express";

import { Streamer } from "../models/streamer";
import { RequestBody } from "../types";

export const postStreamer: RequestHandler = (req, res, next) => {
  const body = req.body as RequestBody;
  const name = body.name;
  const platform = body.platform;
  const description = body.description;
  const streamer = new Streamer({
    name: name,
    platform: platform,
    description: description,
    upVotes: 0,
    downVotes: 0,
  });
  streamer
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Streamer posted successfully!",
        streamer: result,
      });
    })
    .catch((err) => console.log(err));
  next();
};
