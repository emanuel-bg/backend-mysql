import db from "../../mysql/db.js";
import {
  validateMeasureAmount,
  validateMeasureDate,
  validateMeasureMeasuredby,
} from "../../utils/Validations.js";

export default async function post(req, res) {
  let measurmentData = req.body;

  const errors = validate(measurmentData);
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }
  try {
    const newMeasureSQL =
      "INSERT INTO projectx.Measurements (amount, date, measuredby, userId, imageName) VALUES (?, ?, ?, ?, ?);";
    const values = [
      measurmentData.amount,
      measurmentData.date,
      measurmentData.measuredby,
      measurmentData.userId,
      measurmentData.image,
    ];
    const newMeasurementInsert = await db.query(newMeasureSQL, values);
    const sqlMeasurementsData = `select * from Measurements where id=${newMeasurementInsert.insertId}`;
    const data = await db.query(sqlMeasurementsData);
    const measure = data[0];
    return res.status(201).json({
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
  if (!isNaN(measureData.date)) {
    errors.date = ["Invalid measure date"];
  }
  if (!validateMeasureMeasuredby(measureData.measuredby)) {
    errors.measuredby = ["Invalid name for Measured By"];
    //Only letters
  }
  if (isNaN(measureData.userId)) {
    errors.userId = ["Invalid User ID"];
    //Only numbers and letters
  }

  return errors;
}
