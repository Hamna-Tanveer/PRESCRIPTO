/*import mongoose from "mongoose";
const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database Connected"));
  await mongoose.connect(`${process.env.MONGODB_URI}`);
};

export default connectDB;*/
import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  // If already connected, return the existing connection
  if (cached.conn) {
    console.log("Using existing MongoDB connection");
    return cached.conn;
  }

  // If not connected, create a new connection
  if (!cached.promise) {
    console.log("Creating new MongoDB connection...");

    cached.promise = mongoose
      .connect(process.env.MONGODB_URI)
      .then((mongoose) => {
        console.log("✅ MongoDB Connected Successfully");
        return mongoose;
      })
      .catch((error) => {
        console.error("❌ MongoDB Connection Error:", error.message);
        // Re-throw the error so it can be handled by the caller
        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    // Reset the promise if connection fails
    cached.promise = null;
    console.error("❌ Failed to establish MongoDB connection:", error.message);
    throw error;
  }

  return cached.conn;
};

// MongoDB connection events
mongoose.connection.on("connected", () => {
  console.log("✅ Mongoose connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("ℹ️ Mongoose disconnected from MongoDB");
});

export default connectDB;
