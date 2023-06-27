import mongoose from "mongoose";

const Schema = mongoose.Schema;

const streamerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    upVotes: {
      type: Number,
      required: true,
    },
    downVotes: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Streamer = mongoose.model("Streamer", streamerSchema);
