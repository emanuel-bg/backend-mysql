import db from "../../mysql/db.js";

async function list(_req, res) {
  const sqlMeasurements = `select * from Measurements`;
  const data = await db.query(sqlMeasurements);
  const sqlcount = `select count(*) as count FROM Measurements;`;
  const count = await db.query(sqlcount);
  res.status(200).json({ count:count[0].count, data });
}

export default list;
