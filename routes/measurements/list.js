import db from "../../mysql/db.js";
import sqlList from "./sqlList.js"
import sqlListCount from "./sqlListCount.js";

async function list(_req, res) {
  const sqlMeasurements = sqlList();
  const data = await db.query(sqlMeasurements);
  const sqlcount = sqlListCount();
  const count = await db.query(sqlcount);
  res.status(200).json({ count: count[0].count, data });
}

export default list;
