import Measurement from "./measurementModel.js";

async function get_one(req, res) {
  const Id = req.params.id;
  const data = await Measurement.findOne({ id: Id });
  const message = "Succesful GET";
  const errors = {};
  errors.message = "";
  console.log(data);
  res.status(200).json({ message, data, errors });
}

export default get_one;
