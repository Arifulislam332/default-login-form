import cors from "cors";
import "dotenv/config";
import express, { Application } from "express";
import { connectDb } from "./configs/db.config";
import myUserRoute from "./routes/user.route";

const app: Application = express();

app.use(express.json());
app.use(cors());

connectDb();
app.use("/api/my/user", myUserRoute);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Your server is runing on port: ${port}`);
});
