import mongoose from "mongoose";
import Student from "./student.js";
import Teacher from "./teacher.js";
const ClassSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    students: [Student],
    teacher: Teacher,
    schedule: [Date],
    quantity: { type: Number, default: 0 },
    limit: { type: Number },
    absent: [],
    subject: { type: Schema.Types.ObjectId },
    point: [],
  },
  { timestamps: true }
);
const Class = new mongoose.model("Class", ClassSchema);
export default Class;
