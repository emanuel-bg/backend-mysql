import express from "express";
import list from "./list.js";
import post from "./post.js";
import remove from "./remove.js";
import put from "./put.js";
import uploadImage from "./uploadImage.js";
import get_one from "./get_one.js";

var router = express.Router();

router.get("/", list);
router.get("/:id", get_one);

router.post("/", post);
router.put("/:id", put);
router.delete("/:id", remove);
router.post("/uploadImage", uploadImage);

export default router;

//AGREGAR los midlewares verifytoken,currentUser,VerifiyPermissions

//Investigar mongoose https://mongoosejs.com/
