import express from "express";
import { sendMessage, getMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/send/:id", protectRoute,sendMessage);
router.get("/:id", protectRoute,getMessage);

export default router;