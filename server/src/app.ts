import express from "express";
import bodyParser from "body-parser";

import streamersRoutes from "./routes/streamers";

const app = express();

app.use(bodyParser.json());

app.use(streamersRoutes);

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "Server is alive!" });
});

app.listen(5000, () => {
  console.log("Server is running!!!");
});
