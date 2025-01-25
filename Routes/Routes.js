const express = require("express");
const routes = express.Router();
const userRegisterValidate = require("../MiddleWares/UserValidate");
// const registerUser = require("../Controllers/AuthApis/Register");
const loginUser = require("../Controllers/AuthApis/Login");
const addData = require("../Controllers/DataManageApis/AddData");
const tokenChecker = require("../MiddleWares/TokenChecker");
const getData = require("../Controllers/DataManageApis/GetData");
const getMe = require("../Controllers/AuthApis/getMe");
const { verifyOtp } = require("../Controllers/AuthApis/VerifyOtp");
const { registerUser } = require("../Controllers/AuthApis/registerUser");

// post APIs
// routes.post("/register", userRegisterValidate, registerUser);
// routes.post("/login", loginUser);
// routes.post("/add-data", tokenChecker, addData);
routes.post("/registerUser", registerUser);
// routes.post("/verify-otp", verifyOtp);

// get APIs
// routes.get("/get-data", tokenChecker, getData);
// routes.get("/get-me", tokenChecker, getMe);

module.exports = { routes };