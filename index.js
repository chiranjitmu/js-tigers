import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import vendorRouter from "./routes/createvendorRoute.js";
import editRouter from "./routes/editvendorRoute.js";
import deleteRouter from "./routes/deletevendorRoute.js";
import getRouter from "./routes/getvendorRoute.js";

// app config
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(bodyParser.json());

// mongodb connection
mongoose.connect(process.env.MONGOURI);

// app routes
app.use("/api/v1/createvendor", vendorRouter);
app.use("/api/v1/editvendor", editRouter);
app.use("/api/v1/deletevendor", deleteRouter);
app.use("/api/v1/getvendor", getRouter);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
