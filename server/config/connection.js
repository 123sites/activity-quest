import mongoose from "mongoose";
import { config } from "dotenv";
config();

await mongoose.connect(process.env.MONGO_URL);
console.log("Connected to MongoDB!");
