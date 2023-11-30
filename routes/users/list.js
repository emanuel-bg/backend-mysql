import User from "./userModel.js";

async function list(_req, res) {
  try {
    const data = await User.find();
    const count = await User.countDocuments();
    res.status(200).json({ count, data });
  } catch (e) {
    console.log(e);
  }
}

export default list;
