import app from "../app.js";

// Vercel ke liye serverless function
export default async (req, res) => {
  console.log(`📨 ${req.method} ${req.url}`);

  // Vercel environment mein hi database connect karein
  if (process.env.VERCEL) {
    try {
      console.log("🔗 Attempting to connect to database...");

      // Dynamic import se database connection
      const connectDB = (await import("../config/mongodb.js")).default;
      const connectCloudinary = (await import("../config/cloudinary.js"))
        .default;

      // Connection establish karein with timeout
      await Promise.race([
        connectDB(),
        new Promise((_, reject) =>
          setTimeout(
            () => reject(new Error("Database connection timeout")),
            10000
          )
        ),
      ]);

      connectCloudinary();
      console.log("✅ All connections established successfully");
    } catch (error) {
      console.error("⚠️ Database connection failed:", error.message);
      // Error log karein but request proceed karein
    }
  }

  return app(req, res);
};
