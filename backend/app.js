import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

const app = express();

// DB / Cloudinary - Add error handling
try {
  connectDB();
  connectCloudinary();
  console.log("Database and Cloudinary initialized");
} catch (error) {
  console.error("Initialization error:", error.message);
}

// Middlewares
app.use(express.json());
// Replace the CORS section with this:
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

// Import routes with error handling
let adminRouter, doctorRouter, userRouter;

try {
  adminRouter = await import("./routes/adminRoute.js");
  console.log("Admin routes loaded");
} catch (error) {
  console.error("Error loading admin routes:", error.message);
  adminRouter = { default: express.Router() }; // Fallback router
}

try {
  doctorRouter = await import("./routes/doctorRoute.js");
  console.log("Doctor routes loaded");
} catch (error) {
  console.error("Error loading doctor routes:", error.message);
  doctorRouter = { default: express.Router() }; // Fallback router
}

try {
  userRouter = await import("./routes/userRoutes.js");
  console.log("User routes loaded");
} catch (error) {
  console.error("Error loading user routes:", error.message);
  userRouter = { default: express.Router() }; // Fallback router
}

// Routes
app.use("/api/admin", adminRouter.default);
app.use("/api/doctor", doctorRouter.default);
app.use("/api/user", userRouter.default);

app.get("/", (req, res) => res.send("API WORKING ✅"));
app.get("/health", (req, res) =>
  res.json({ status: "OK", timestamp: new Date().toISOString() })
);

// Export for Vercel
export default app;
