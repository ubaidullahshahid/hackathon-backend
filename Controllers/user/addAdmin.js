const AdminsModel = require("../../Models/adminsModel");

const addAdmin = async (req, res) => {
    try {
        const body = req.body
        const staff = new AdminsModel({ ...body });
        const saveStaff = await staff.save();
        return res.status(200).json({ message: "Staff created successfully", success: true, data: saveStaff });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong!", success: false });

    }

}

module.exports = addAdmin;