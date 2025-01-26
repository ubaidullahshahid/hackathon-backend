const tokenModel = require("../../Models/tokenModel");

const getTokens = async (req, res) => {
    try {
        const { status } = req.query;

        let tokens;
        if (status === "all") {
            tokens = await tokenModel.find();
        } else {
            tokens = await tokenModel.find({ status });
        }

        return res.status(200).json({ message: "Tokens found successfully", success: true, data: tokens });
    } catch (error) {
        console.log("Error in getTokens:", error.message);
        return res.status(500).json({ message: "Something went wrong!", success: false });
    }
};

module.exports = { getTokens };
