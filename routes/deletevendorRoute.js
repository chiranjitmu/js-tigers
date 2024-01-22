import express from "express";
import { deletevendor } from "../controllers/deletevendorController.js";

const deleteRouter = express.Router();

deleteRouter.delete("/:id", deletevendor);

export default deleteRouter;
