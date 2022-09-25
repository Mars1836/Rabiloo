import mongoose from "mongoose";
const AdminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  author: { type: String, required: true, default: "admin" },
});
const Admin = new mongoose.model("admin", AdminSchema);
export default Admin;
