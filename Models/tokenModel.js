const mongoose = require("mongoose");
const { Schema } = mongoose;

const token = new Schema({
    token: {
        type: String,
        required: true,
    },
    userRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
});

const tokenModel = mongoose.model("tokens", token);
module.exports = tokenModel;
