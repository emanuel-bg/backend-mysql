import Measurement from "./measurementModel.js";

export default async function remove(req, res) {
  const deletedId = req.params.id;

  const message = "Succesful Delete";
  const errors = {};
  errors.message = "";
  try {
    const result = await Measurement.deleteOne(
      { id: deletedId }
    );
  } catch (e) {
    data = InsertedData;
    message = "Error creating de object";
    errors = e;
  }
  return res.status(200).json({ message, deletedId, errors });
}
