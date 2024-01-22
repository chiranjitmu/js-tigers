import express from "express";
import { createvendor } from "../controllers/createvendorController.js";

const vendorRouter = express.Router();

vendorRouter.post("/", createvendor);

export default vendorRouter;