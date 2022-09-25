import mongoose from "mongoose";
const TeacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  author: { type: String, required: true, default: "teacher" },
});
const Teacher = new mongoose.model("teacher", TeacherSchema);
export default Teacher;
