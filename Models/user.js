import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, require: true },
    mobile: { type: Number, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
  },
  { timestamps: true }
);

const UserModel = models.User || model("User", UserSchema);

export default UserModel;
