const { verifyJwt } = require("../Utils/Jwt");

const tokenChecker = (req, res, next) => {
  console.log("klllllllllllllll");
  const token = req.headers["authorization"];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = verifyJwt(token);
    if (!decoded) {
      return res
        .status(401)
        .json({ message: "Token is invalid." });
    }

    req.query.userId = decoded._id;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "Token expired. Please login again." });
    }

    return res.status(403).json({ message: "Invalid token." });
  }
};

module.exports = { tokenChecker };