import app from "../backend/app.js";

// Vercel ke liye serverless function
export default async (req, res) => {
  console.log("Request received:", req.method, req.url);

  // Vercel environment mein hi database connect karein
  if (process.env.VERCEL) {
    try {
      console.log("Attempting to connect to database...");

      // Dynamic import se database connection
      const connectDB = (await import("../backend/config/mongodb.js")).default;
      const connectCloudinary = (
        await import("../backend/config/cloudinary.js")
      ).default;

      // Connection establish karein
      await connectDB();
      await connectCloudinary();
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Database connection failed:", error.message);
      // Error log karein but request proceed karein
    }
  }

  return app(req, res);
};
