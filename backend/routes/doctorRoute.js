import express, { Router } from "express";
import {
  appointmentCancel,
  appointmentComplete,
  docAppointments,
  doctorList,
  loginDoctor,
} from "../controller/doctorController.js";
import authDoctor from "../middlewares/authDoctor.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList);
doctorRouter.post("/login", loginDoctor);
doctorRouter.get("/appointments", authDoctor, docAppointments);
doctorRouter.post("/appointment-complete", authDoctor, appointmentComplete);
doctorRouter.post("/appointment-cancel", authDoctor, appointmentCancel);
export default doctorRouter;
