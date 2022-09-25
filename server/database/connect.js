import mongoose from "mongoose";
export const db = {
  connect: () => {
    mongoose
      .connect("mongodb://localhost:27017/Rabiloo_dev")
      .then(() => {
        console.log("connect success");
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
