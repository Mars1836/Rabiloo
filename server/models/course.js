import mongoose from "mongoose";
import Student from "./student.js";
import Teacher from "./teacher.js";
const ClassSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);
const Class = new mongoose.model("cClass", ClassSchema);
export default Class;
