const tokenModel = require("../../Models/tokenModel");
const UserModel = require("../../Models/UserModel");
const { sendToken } = require("../../Utils/EmailsToSend");
const { generateOtp } = require("../../Utils/OTP");

const addToken = async (req, res) => {
  try {
    const { email, cnic, purpose } = req.body;

    if (!email || !cnic || !purpose) {
      return res.status(400).json({ message: "All fields are required", success: false });
    }

    const userToken = generateOtp();

    const user = await new tokenModel({ token: userToken, ...req.body }).save();
    await sendToken(user, userToken)
    return res.status(200).json({ message: "Token sent successfully", success: true, data: user });

  } catch (error) {
    console.error("Error in registerUser:", error.message);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};

module.exports = { addToken };
