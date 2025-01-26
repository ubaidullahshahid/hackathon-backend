const tokenModel = require("../../Models/tokenModel");

const editTokenStatus = async (req, res) => {
    try {
        const { status, token } = req.body;
        if (!status || !token) {
            return res.status(400).json({ message: "status and token are required", success: false });
        }

        const user = await tokenModel.findOne({ token })
        user.status = status
        await user.save();

        return res.status(200).json({ message: "Status updated successfully", success: true, data: user });

    } catch (error) {
        console.error("Error in registerUser:", error.message);
        return res.status(500).json({ message: "Something went wrong!", success: false });
    }
};

module.exports = { editTokenStatus };
