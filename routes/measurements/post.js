
import Measurement from "./measurementModel.js";

export default async function post(req, res) {
  let InsertedData = req.body
  let message = "Succesful post";
  let errors = {};

  errors.message = "";
  try {
    await Measurement.create(InsertedData);
  } catch (e) {
    InsertedData = req.body;
    message = "Error creating de object";
    errors = e;
  }
  return res.status(200).json({ message, InsertedData, errors });
}
