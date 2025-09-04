import app from "../backend/app.js";

// Vercel ke liye serverless function
export default async (req, res) => {
  // Vercel environment mein database connect karein
  if (process.env.VERCEL) {
    try {
      // Dynamic import se database utilities
      const connectDB = (await import("../backend/config/mongodb.js")).default;
      const connectCloudinary = (
        await import("../backend/config/cloudinary.js")
      ).default;

      // Connection establish karein
      await connectDB();
      await connectCloudinary();
      console.log("Database connected in Vercel environment");
    } catch (error) {
      console.log(
        "Database connection in Vercel (non-critical):",
        error.message
      );
      // Connection fail hone par bhi request proceed karein
    }
  }

  return app(req, res);
};
