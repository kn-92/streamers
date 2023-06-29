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

export const getStreamer: RequestHandler = async (req, res, next) => {
  const streamerId = req.params.streamerId;
  try {
    const streamer = await Streamer.findById(streamerId);
    res
      .status(200)
      .json({ message: "Streamer fetched successfully.", streamers: streamer });
  } catch (error) {
    console.log(error);
    const err: StatusError = new Error(
      "No streamer with provided id in database."
    );
    err.statusCode = 404;

    return next(err);
  }
};

export const voteAStreamer: RequestHandler = (req, res, next) => {
  const streamerId = req.params.streamerId;
  const action = req.query.action;
  const streamer: any = Streamer.findById(streamerId)
    .then((element) => {
      if (!element) {
        const error: StatusError = new Error("Could not find streamer");
        error.statusCode = 404;
        throw error;
      }
      if (action === "up") {
        element.upVotes++;
        return element.save();
      } else if (action === "down") {
        element.downVotes++;
        return element.save();
      } else {
        res.status(200).json({ message: "Invalid action value" });
        return element;
      }
    })
    .then((result) => {
      res
        .status(200)
        .json({ message: "Streamer votes updated", streamer: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      console.log(err);
      next(err);
    });
};
