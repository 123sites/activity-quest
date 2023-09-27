import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  passwordHash: {
    type: String,
    required: true,
    minlength: 5,
  },
});

export async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

export async function isPasswordCorrect(password, hash) {
  return bcrypt.compare(password, hash);
}

const User = model("User", userSchema);
export default User;
