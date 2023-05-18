import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already in use!"],
    required: [true, "Please enter a valid email"],
  },
  username: {
    type: String,
    required: [true, "Please enter a valid username"],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", userSchema);
export default User;
