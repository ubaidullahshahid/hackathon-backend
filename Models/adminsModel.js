const mongoose = require("mongoose");

const AdminsSchema = new mongoose.Schema(
  {

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true
    }

  },
  { timestamps: true }
);

const AdminsModel = mongoose.model("admins", AdminsSchema);
module.exports = AdminsModel;
