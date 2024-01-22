import express from "express";
import { getvendor } from "../controllers/getvendorController.js";

const getRouter = express.Router();

getRouter.get("/", getvendor);

export default getRouter;