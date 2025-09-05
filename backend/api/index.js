import app from "../app.js";

export default async (req, res) => {
  try {
    console.log(`📨 ${req.method} ${req.url}`);

    // For Vercel: Connect to DB inside the function handler
    if (process.env.VERCEL) {
      try {
        // Dynamic imports for serverless compatibility
        const connectDB = (await import("../backend/config/mongodb.js"))
          .default;
        const connectCloudinary = (
          await import("../backend/config/cloudinary.js")
        ).default;

        await connectDB();
        connectCloudinary(); // No await since it's synchronous
      } catch (dbError) {
        console.error("Database connection warning:", dbError.message);
        // Continue even if DB connection fails
      }
    }

    return app(req, res);
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      message:
        process.env.NODE_ENV === "production"
          ? "Please try again later"
          : error.message,
    });
  }
};
