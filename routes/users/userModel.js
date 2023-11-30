import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
});

userSchema.methods.public = function () {
  return { email: this.email };
};

const User = mongoose.model("user", userSchema);

export default User;
