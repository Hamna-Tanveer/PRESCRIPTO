import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

// Sirf local development mein DB connect karein
if (process.env.VERCEL !== "1") {
  try {
    connectDB();
    connectCloudinary();
    console.log("Database and Cloudinary initialized for local development");
  } catch (error) {
    console.error("Initialization error:", error.message);
  }
}

// Middlewares
app.use(express.json());

// CORS - Simple rakhein
app.use(
  cors({
    origin: [
      "https://prescripto-lxu3.vercel.app",
      "http://localhost:5174",
      "http://127.0.0.1:5174",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// Routes - Direct import use karein (dynamic import nahi)
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => res.send("API WORKING ✅"));
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Server is running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

// Export for Vercel
export default app;
