import express from "express";
import Login from "./login.js";
import list from "../users/list.js";
import post from "./post.js";

var router = express.Router();

router.post("/login", Login);
router.post("/", post);
router.get("/",list)

export default router;
