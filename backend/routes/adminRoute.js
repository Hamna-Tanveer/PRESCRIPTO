import express from "express";
import { changeAvailability } from "../controller/doctorController.js";
import {
  addDoctor,
  allDoctors,
  appointmentsAdmin,
  loginAdmin,
  cancelAppointment,
  adminDashboard,
} from "../controller/adminController.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";

const adminRouter = express.Router();

adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.post("/login", loginAdmin);
adminRouter.get("/all-doctors", authAdmin, allDoctors);
adminRouter.post("/change-availabilty", authAdmin, changeAvailability);
adminRouter.get("/appointments", authAdmin, appointmentsAdmin);
adminRouter.post("/cancel-appointment", authAdmin, cancelAppointment);
adminRouter.get("/dashboard", authAdmin, adminDashboard);
export default adminRouter;
