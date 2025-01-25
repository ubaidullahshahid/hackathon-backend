const tokenModel = require("../../Models/tokenModel");

const getTokenStatus = async (req, res) => {
    try {
        const token = req.query.token
        if (!token) {
            return res.status(400).json({ message: "Token is required", success: false });
        }
        const verifyToken = await tokenModel.find({ token: token })
        if (!verifyToken) {
            return res.status(401).json({ message: "Invalid token", success: false });
        }
        return res.status(200).json({ message: "Token get successfully!", data: verifyToken[0].status, success: true });
    } catch (error) {
        console.log("error", error.message)
        return res.status(500).json({ message: "Something went wrong!", success: false });
    }
}

module.exports = { getTokenStatus }