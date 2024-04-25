import express, { Router } from "express";
import { createCurrentUser } from "../controllers/createUser";

const router: Router = express.Router();

router.post("/", createCurrentUser);

export default router;
