const express = require("express");
const routes = express.Router();
const { addToken } = require("../Controllers/AuthApis/addToken");
const { getTokenStatus } = require("../Controllers/AuthApis/getTokenStatus");
const userRegisterValidate = require("../MiddleWares/UserValidate");
const addAdmin = require("../Controllers/user/addAdmin");

// post APIs
// routes.post("/register", userRegisterValidate, registerUser);
// routes.post("/login", loginUser);
// routes.post("/add-data", tokenChecker, addData);
routes.post("/addToken", addToken);
routes.post("/addStaff", userRegisterValidate, addAdmin);
// routes.post("/verify-otp", verifyOtp);

// get APIs
routes.get("/getTokenStatus", getTokenStatus);
// routes.get("/get-me", tokenChecker, getMe);

module.exports = { routes };