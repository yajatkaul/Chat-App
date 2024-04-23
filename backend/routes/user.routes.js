import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSideBar } from "../controllers/user.controller.js";

const router = express();


router.get('/',protectRoute,getUsersForSideBar);

export default router;