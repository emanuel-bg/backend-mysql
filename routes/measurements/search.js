import db from "../../mysql/db.js";
import sqlByAmount from "./sqlByAmount.js";
import sqlByDate from "./sqlByDate.js";
import sqlByDateCount from "./sqlByDateCount.js";

async function search(req, res) {
  const searchData = req.body;
  let sqlMeasurements, data, sqlcount, count; // Declare the variables here

  switch (searchData.selectedAttribute) {
    case "date":
      sqlMeasurements = sqlByDate(searchData.search);
      data = await db.query(sqlMeasurements);
      sqlcount = sqlByDateCount(searchData.search);
      count = await db.query(sqlcount);
      res.status(200).json({ count, data });
      break;
    case "amount":
      sqlMeasurements = sqlByAmount(searchData.search);
      data = await db.query(sqlMeasurements);
      sqlcount = sqlByDateCount(searchData.search);
      count = await db.query(sqlcount);
      res.status(200).json({ count, data });
      break;
    default:
      res.status(400).json({ message: "Could not find the measurements" });
      break;
  }
}

export default search;