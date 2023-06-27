import { RequestHandler } from "express";
import { validationResult } from "express-validator/src/validation-result";

import { Streamer } from "../models/streamer";
import { RequestBody, StatusError } from "../types";

export const postStreamer: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error: StatusError = new Error("Validation failed, incorrect data.");
    error.statusCode = 422;
    error.errorArray = errors.array();
    // return res.status(422).json({
    //   message: "Validation failed, incorrect data.",
    //   errors: errors.array(),
    // });
    return next(error);
  }
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
};

export const getStreamers: RequestHandler = async (req, res, next) => {
  //   Streamer.find()
  //     .then((result) =>
  //       res
  //         .status(200)
  //         .json({ streamers: result, message: "Streamers fetched succesfully" })
  //     )
  //     .catch((error) => {
  //       console.log(error);
  //       const err: StatusError = new Error("Fetching from DB failed");
  //       error.statusCode = 404;
  //       return next(error);
  //     });
  try {
    const streamers = await Streamer.find();
    if (!streamers) {
      return res
        .status(200)
        .json({ streamers: streamers, message: "No streamers in DB" });
    }
    res.status(200).json({
      streamers: streamers,
      message: "Streamers fetched successfully",
    });
  } catch (error) {
    console.log(error);
    const err: StatusError = new Error("Fetching from DB failed");
    err.statusCode = 500;

    return next(err);
  }
};
