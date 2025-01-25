const tokenModel = require("../../Models/tokenModel");
const UserModel = require("../../Models/UserModel");

const registerUser = async (req, res) => {
  const { email, cnic, purpose } = req.body;

  try {
    if (!body || Object.keys(body).length === 0) {
      return res.status(400).json({ message: "Body is required", success: false });
    }
    const userToken = generateOtp();

    let user = await UserModel.findOne({ email });
    if (user) {
      const tokens = new tokenModel({ token: userToken, userRef: user._id })
      await tokens.save()
      return res.status(400).json({ message: "Token Send Successfully", success: true, token: userToken })
    }
    const newUser = new UserModel({ email, cnic, purpose });
    const tokens = new tokenModel({ token: userToken, userRef: newUser._id })
    await newUser.save()
    await tokens.save()
    return res.status(400).json({ message: "Token Send Successfully", success: true, token: userToken })

  } catch (error) {
    res.status(500).json({ message: "Something went wrong!", success: false });
  }
};

module.exports = { registerUser };
