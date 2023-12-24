import express from "express";
import list from "./list.js";
import post from "./post.js";
import remove from "./remove.js";
import put from "./put.js";
import uploadImage from "./uploadImage.js";
import get_one from "./get_one.js";
import search from "./search.js";
import modelById from "../../middlewares/modelById.js";
var router = express.Router();

const columns = [
  "CAST(id AS CHAR) as id",
  "amount",
  "date",
  "measuredby",
  "userid as userId",
  "imageName",
  "created_at",
  "updated_at",
];
const table = "Measurements";
router.get("/", list);
router.get("/:id", modelById(columns,table,"measurement"), get_one);
router.post("/", post);
router.put("/:id",modelById(columns,table,"measurement"), put);
router.delete("/:id",modelById(columns,table,"measurement"), remove);
router.post("/uploadImage", uploadImage);
router.post("/search", search);

export default router;

//AGREGAR los midlewares verifytoken,currentUser,VerifiyPermissions

//Investigar mongoose https://mongoosejs.com/
