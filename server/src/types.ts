import { ValidationError } from "express-validator";

export type RequestBody = {
  name: string;
  platform: string;
  description: string;
};

export interface StatusError extends Error {
  statusCode?: number | undefined;
  errorArray?: ValidationError[] | undefined;
}
