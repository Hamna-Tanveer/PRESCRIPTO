import express from "express";

import {
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
  upload.single("image"),
  authUser,
  updateProfile
);
export default userRouter;
