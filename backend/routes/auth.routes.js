import express from "express";
import {signupuser,loginUser,logout} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login",loginUser);
router.post("/signup",signupuser);
router.post("/logout",logout);
export default router;