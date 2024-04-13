import cors from "cors";
import "dotenv/config";
import express, { Application } from "express";
import { connectDb } from "./configs/db.config";

const app: Application = express();

app.use(express.json());
app.use(cors());


connectDb();

const port = 8888;

app.listen(port, () => {
  console.log(`Your server is runing on port: ${port}`);
});
