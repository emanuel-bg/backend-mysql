import db from "../../mysql/db.js";

async function list(_req, res) {
  try {
    const sqlusers = `select * from Users;`;
    const data = await db.query(sqlusers);
    const sqlcount = `select count(*) as count FROM Users;`;
    const count = await db.query(sqlcount);
    res.status(200).json({ count:count[0].count, data });
  } catch (e) {
    console.log(e);
  }
}

export default list;
