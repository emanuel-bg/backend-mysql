import db from "../../mysql/db.js";
import { validateMeasureMeasuredby } from "../../utils/Validations.js";

export default async function put(req, res) {
  debugger
  const measurementId = req.params.id;
  let measurmentData = req.body;
     measurmentData.updated_at=Date.now()/1000
  const errors = validate(measurmentData);
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }
  const measurement=res.locals.measurement
  if(!measurement){
    return res.status(400).json({ error:"Measurement does'nt exist" });
  }
  try {
    const newMeasureSQL =
      "UPDATE Measurements SET amount=?, date=?, measuredby=?, userid=?, imageName=?, updated_at=? WHERE id=?";
      
    const values = [
      measurmentData.amount,
      measurmentData.date,
      measurmentData.measuredby,
      measurmentData.userId,
      measurmentData.imageName,
      measurmentData.updated_at,
      measurementId,
    ];
    const newMeasurementInsert = await db.query(newMeasureSQL, values);
    const sqlMeasurementsData = `select * from Measurements where id=${measurementId}`;
    const data = await db.query(sqlMeasurementsData);
    const measure = data[0];
    return res.status(200).json({
      data: measure,
    });
  } catch (e) {
    console.log(e);
  }
}

function validate(measureData) {
  let errors = {};
  if (isNaN(measureData.amount)) {
    errors.amount = ["Invalid measure amount"];
  }
 
  if (isNaN(measureData.userId)) {
    errors.userId = ["Invalid User ID"];
    //Only numbers and letters
  }errors

  return errors;
}
