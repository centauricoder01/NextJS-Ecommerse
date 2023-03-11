const mongoose = require("mongoose");

const UserSchema = new mongoose(
  {
    name: { type: String, require: true },
    mobile: { type: Number, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
