/*import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoutes.js";

// app config
const app = express();

const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: ["https://prescripto-lxu3.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

//api endpoints
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => console.log(`Server started at ${port}`));*/
// backend/server.js
// backend/server.js
// backend/server.js

import app from "./app.js";

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
  console.log(`🟢 Health check: http://localhost:${port}/health`);
});
