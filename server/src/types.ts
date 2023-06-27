import { ValidationError } from "express-validator";

export type RequestBody = {
  name: string;
  platform: string;
  description: string;
};

export type DBStreamer = {
  name: string;
  plaform: string;
  description: string;
  upVotes: number;
  downVotes: number;
  createdAt: Date;
  updatedAt: Date;
  _id: Object;
};

export interface StatusError extends Error {
  statusCode?: number | undefined;
  errorArray?: ValidationError[] | undefined;
}
