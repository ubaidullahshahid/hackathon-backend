const AdminsModel = require("../../Models/adminsModel");

const addStaff = async (req, res) => {
    try {
        const body = req.body
        if (!body || Object.keys(body).length === 0) {
            return res.status(400).json({ message: "No data provided", success: false });
        }
        const staff = new AdminsModel(body);
        const saveStaff = await staff.save();
        return res.status(200).json({ message: "Staff created successfully", success: true, data: saveStaff });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong!", success: false });

    }

}

module.exports = addStaff;