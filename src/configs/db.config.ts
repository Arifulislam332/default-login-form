import mongoose from "mongoose";

export const connectDb = () => {
  mongoose
    .connect(process.env.MONGODB_URI as string)
    .then(() => console.log("Db connect😪"))
    .catch((err) => console.log(err));
};
