import User from "./userModel.js";
import bcrypt from "bcrypt";

export default async function Login(req, res) {
  try {
    const userData = req.body;
    const user = await User.findOne({ email: userData.email });
    //validar email
    const validPassord = bcrypt.compare(userData.password, user.password);
    if (!user || !validPassord) {
      let errors = {};
      errors.email = [
        "Invalid user or password",
        "Email required",
      ];
      errors.password = ["Invalid user or password"];
      return res.status(422).json({ errors });
    }
    res.status(200).json({ data: user.public() });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server side error" });
  }
}
