const tokenModel = require("../../Models/tokenModel");
const UserModel = require("../../Models/UserModel");

const registerUser = async (req, res) => {
  const { email, cnic, purpose } = req.body;

  if (!email || !cnic || !purpose) {
    return res.status(400).json({ message: "Missing required fields", success: false });
  }

  try {
    const userToken = generateOtp();

    let user = await UserModel.findOne({ email });
    const userExists = user || new UserModel({ email, cnic, purpose });

    if (!user) await userExists.save();

    const tokenDoc = new tokenModel({ token: userToken, userRef: userExists._id });
    await tokenDoc.save();

    return res.status(200).json({ message: "Token Sent Successfully", success: true, token: userToken });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong!", success: false });
  }
};

module.exports = { registerUser };
