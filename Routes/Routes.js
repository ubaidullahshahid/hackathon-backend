const express = require("express");
const routes = express.Router();
const { addToken } = require("../Controllers/AuthApis/addToken");
const { getTokenStatus } = require("../Controllers/AuthApis/getTokenStatus");
const userRegisterValidate = require("../MiddleWares/UserValidate");
const addAdmin = require("../Controllers/user/addAdmin");
const { tokenChecker } = require("../MiddleWares/TokenChecker");
const getMe = require("../Controllers/AuthApis/getMe");
const loginUser = require("../Controllers/AuthApis/Login");
const { editTokenStatus } = require("../Controllers/AuthApis/editTokenStatus");
const { getTokens } = require("../Controllers/AuthApis/getTokens");

// post APIs
routes.post("/login", loginUser);
routes.post("/addToken", addToken);
routes.post("/addStaff", userRegisterValidate, addAdmin);

// edit Apis 
routes.put("/editTokenStatus", editTokenStatus)

// get APIs
routes.get("/getTokenStatus", getTokenStatus);
routes.get("/getTokens", tokenChecker, getTokens);
routes.get("/get-me", tokenChecker, getMe);

module.exports = { routes };