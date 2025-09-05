import "dotenv/config";
import express from "express";
import cors from "cors";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

// Middlewares
app.use(express.json());

// CORS - Simple and effective
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

// Routes
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

// Basic routes
app.get("/", (req, res) => res.send("API WORKING ✅"));

// Health check (without DB dependency)
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
