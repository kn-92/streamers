import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";

import streamersRoutes from "./routes/streamers";
import { errorMiddlewareController } from "./controllers/error";

const app = express();

const PORT = process.env.PORT;
const URI = process.env.DATABASE_STRING as string;

app.use(cors());
app.use(bodyParser.json());

app.use("/streamers", streamersRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
  next();
});

//error middleware
app.use(errorMiddlewareController);

mongoose.connect(URI).then(
  () => {
    app.listen(PORT || 6000, () => {
      console.log("Server is running!!!");
    });
  },
  (error) => {
    console.log(error);
  }
);
