import express, { Router } from "express";
import {
  docAppointments,
  doctorList,
  loginDoctor,
} from "../controller/doctorController.js";
import authDoctor from "../middlewares/authDoctor.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList);
doctorRouter.post("/login", loginDoctor);
doctorRouter.get("/appointments", authDoctor, docAppointments);
export default doctorRouter;
