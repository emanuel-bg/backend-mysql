import express from "express";
import Login from "./login.js";
import list from "../users/list.js";
import post from "./post.js";
import me from "./me.js";
import verifyToken from "../../middlewares/verifyToken.js"
import Logout from "./logout.js";
var router = express.Router();

router.post("/login", Login);
router.post("/logout", verifyToken, Logout);
router.post("/", post);
router.post("/me", verifyToken, me);
router.get("/",verifyToken,list)

export default router;
