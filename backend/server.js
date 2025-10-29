// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import studentRoutes from "./student/routes/studentRoutes.js";

// dotenv.config();
// const app = express();

// // Middleware
// app.use(express.json());

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log("MongoDB Connected Successfully"))
//     .catch(err => console.log(err));

// // Routes
// app.use("/api/students", studentRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import studentRoutes from "./student/routes/studentRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch(err => console.log(err));

// Routes
app.use("/api/student", studentRoutes);
// app.use("/uploads", express.static("uploads"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
