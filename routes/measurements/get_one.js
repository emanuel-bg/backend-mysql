import db from "../../mysql/db.js";
import sqlById from "./sqlById.js";

async function get_one(_req, res) {
  const data = res.locals.measurement
  res.status(200).json({ data: data });
}

export default get_one;
