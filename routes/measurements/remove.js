import db from "../../mysql/db.js";
export default async function remove(req, res) {
  const id = req.params.id;

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid Id" });
  }
  try {
    const sqlDelete = `delete from Measurements where _id='${id}';`;
    const deleted = await db.query(sqlDelete);
    console.log(deleted);
    if (deleted.serverStatus == 2) {
      return res.status(200).json({ deletedId: id });
    }
  } catch (e) {
    console.log(e);
  }
}
