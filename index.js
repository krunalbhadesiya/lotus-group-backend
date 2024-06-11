import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import cors from "cors";

// Import routes
import home from "./routes/home.js";
import contactsRouter from "./routes/contacts.js";
import projectsRouter from "./routes/projects.js";

// Load environment variables
dotenv.config();

// Middlewares
const app = express();
app.use(express.json({ limit: "10mb" })); // Increased limit for large JSON payloads

// CORS middleware
// app.use(
//   cors({
//     origin: 'https://lotusgroup.vercel.app', // Adjust to your frontend URL
//   })
// );


// Routes
app.use("/home", home);
app.use("/api/contacts", contactsRouter);
app.use("/api/projects", projectsRouter);

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI;
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Server connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));

export default app;
