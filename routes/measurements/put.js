import Measurement from "./measurementModel.js";

export default async function put(req, res) {
  const updatedId = req.params.id;
  let updatedData = req.body;
  let message = "Succesful Update";
  let errors = {};

  errors.message = "";
 
  const exist= await Measurement.countDocuments({ id: updatedId })
  if (!exist) {
    updatedData = req.body;
    message = "Object does not exist";
    errors = {};
    return res.status(400).json({ message, data:updatedData, errors });
  }
  try {
    await Measurement.updateOne(
      { id: updatedId },
      {
        $set: {
          amount: updatedData.amount,
          date: updatedData.date,
          measuredby: updatedData.measuredby,
          userId: updatedData.userId,
          imageName: updatedData.imageName,
        },
      }
    );
  } catch (e) {
    updatedData = req.body;
    message = "Error updating de object";
    errors = e;
  }
  res.status(200).json({ message, updatedData, errors });
}
