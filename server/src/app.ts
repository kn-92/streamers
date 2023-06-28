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

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "OPTIONS, GET, POST, PUT, PATCH"
//   );
//   res.setHeader("Access-Control-Allow-Origin", "Content-Type, Authorization");
//   next();
// });

app.use("/streamers", streamersRoutes);

// app.get("/", (req, res, next) => {
//   res.status(200).send("<h1>Server is alive!!! </h1>");
//   next();
// });

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
