import mongoose from "mongoose";
const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  author: { type: String, required: true, default: "student" },
});
const Student = new mongoose.model("student", StudentSchema);
export default Student;
