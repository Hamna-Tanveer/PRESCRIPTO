import express from "express";
import cors from "cors";
import connectDB from "../backend/config/mongodb.js";
import connectCloudinary from "../backend/config/cloudinary.js";
import adminRouter from "../backend/routes/adminRoute.js";
import doctorRouter from "../backend/routes/doctorRoute.js";
import userRouter from "../backend/routes/userRoutes.js";

const app = express();

// Connect DB & Cloudinary
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: ["https://prescripto-lxu3.vercel.app"], // your frontend domain
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Routes
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Backend API is working on Vercel ✅");
});

// export for Vercel
export default app;
