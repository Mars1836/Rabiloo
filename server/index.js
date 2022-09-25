import express from "express";
import { db } from "./database/connect.js";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
db.connect();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
