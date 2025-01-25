const mongoose = require("mongoose");
const { Schema } = mongoose;

const token = new Schema({
    token: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    cnic: {
        type: String,
        required: true,
    },

    purpose: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'complete', 'rejected']
    }
});

const tokenModel = mongoose.model("tokens", token);
module.exports = tokenModel;
