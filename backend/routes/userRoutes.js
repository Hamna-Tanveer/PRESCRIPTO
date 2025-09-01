import express from "express";

import {
  bookAppointment,
  getUserProfile,
  loginUser,
  registerUser,
  updateProfile,
} from "../controller/userController.js";
import { authUser } from "../middlewares/authUser.js";
import upload from "../middlewares/multer.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/get-profile", authUser, getUserProfile);
userRouter.post(
  "/update-profile",
  authUser,
  upload.single("image"),
  updateProfile
);
userRouter.post("/book-appointment", authUser, bookAppointment);
export default userRouter;
