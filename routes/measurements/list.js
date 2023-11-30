import Measurement from "./measurementModel.js";

async function list(_req, res) {
  const data = await Measurement.find();
  const count = await Measurement.countDocuments()
  const message="Succesful GET"
  const errors = {};
  errors.message = "";
  console.log(data);
  res.status(200).json({count,message, data, errors });
}

export default list;
