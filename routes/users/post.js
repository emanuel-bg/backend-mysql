import {
  NoNull,
  validateEmail,
  validateLetters,
  validatePassword,
  NoSpacesAndNull,
} from "../../utils/Validations.js";
import db from "../../mysql/db.js";
import bcrypt from "bcrypt";

export default async function post(req, res) {
  let userData = req.body;
  const sqlexist = `select * from Users where email='${userData.email}';`;
  const userExist = await db.query(sqlexist);
  console.log(userExist.length > 0);
  if (userExist.length > 0) {
    return res.status(409).json({ message: "User already exist" });
  }

  const errors = validate(userData);
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  bcrypt.hash(userData.password, 8, async (err, hash) => {
    if (err) throw Error;
    const hashedPassword = hash;
    userData.password = hashedPassword;
    try {
      const newUserSQL =
        "INSERT INTO projectx.Users (name, username, email, password) VALUES (?, ?, ?, ?);";
      const values = [
        userData.name,
        userData.username,
        userData.email,
        userData.password,
      ];
      const newUser = await db.query(newUserSQL, values);
      return res
        .status(201)
        .json({ message: "User succesfully created", id: newUser.id});
    } catch (e) {
      console.log(e);
    }
  });
}

function validate(userData) {
  const errors = {};
  if (!validateEmail(userData.email)) {
    errors.email = ["Invalid email"];
  }
  if (!validatePassword(userData.password)) {
    errors.password = ["The password doesn't meet the system requirements"];
  }
  if (!NoSpacesAndNull(userData.username)) {
    errors.username = ["The username doesn't meet the system requirements"];
  }
  if (!validateLetters(userData.name) || !NoNull(userData.name)) {
    errors.name = ["The name doesn't meet the system requirements"];
  }

  return errors;
}
