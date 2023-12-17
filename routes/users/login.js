import bcrypt from "bcrypt";
import db from "../../mysql/db.js";
import getJWT from "../../utils/getJWT.js"
import SQLcreateSession from "./SQLcreateSession.js";

export default async function Login(req, res) {
  try {
    const userData = req.body;
    const userSQL = `select * from Users as user where email='${userData.email}';`;
    const userDB = await db.query(userSQL);
    const user = userDB[0];
    if (userDB.length == 0) {
      user.password = "";
    }

    const validPassord = await bcrypt.compare(userData.password, user.password);
    if (userDB.length == 0 || !validPassord) {
      let errors = {};
      errors.email = ["Invalid user or password", "Email required"];
      errors.password = ["Invalid user or password"];
      return res.status(422).json({ errors });
    }
    user.token = getJWT(user);
    const values = [
      user.id,
      Date.now(),
      Date.now(),
      user.token,
    ];
   await db.query(SQLcreateSession(),values);

    res.status(200).json({ data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server side error" });
  }
}
