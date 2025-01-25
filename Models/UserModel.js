const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {

    email: {
      type: String,
      required: true,
      unique: true,
    },

    cnic: {
      type: Number,
      required: true,
      unique: true,
    },

    purpose: {
      type: String,
      required: true
    },

  },
  { timestamps: true }
);

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
