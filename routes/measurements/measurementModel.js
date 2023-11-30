import mongoose from "mongoose";

const measurementSchema = new mongoose.Schema({
  id:String,
  amount: String,
  date: String,
  measuredby: String,
  userId: String,
  imageName: String,
});

const Measurement = mongoose.model("measurement", measurementSchema);

export default Measurement;