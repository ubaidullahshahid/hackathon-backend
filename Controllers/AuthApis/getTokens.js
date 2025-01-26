const tokenModel = require("../../Models/tokenModel");

const getTokens = async (req, res) => {
    try {
        const { status } = req.query
        const tokens = await tokenModel.find({ status });

        return res.status(200).json({ message: "Tokens found successfully", success: true, data: tokens })
    } catch (error) {
        console.log(error.message)
        return res.status(400).json({ message: "Something went wrong!", success: false })
    }
}

module.exports = { getTokens };