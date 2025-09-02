import express, { Router } from "express";
import { doctorList, loginDoctor } from "../controller/doctorController.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList);
doctorRouter.post("/login", loginDoctor);
export default doctorRouter;
