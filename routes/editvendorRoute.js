import express from "express";
import { editvendor } from "../controllers/editvendorController.js";

const editRouter = express.Router();

editRouter.put("/:id", editvendor);

export default editRouter;
