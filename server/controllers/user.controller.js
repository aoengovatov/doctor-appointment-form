const userService = require("../services/user.service");

exports.getUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const content = await userService.getUser(email, password);

        return res.status(200).json(content);
    } catch (e) {
        return res.status(400).json(error);
    }
};

exports.addUser = async (req, res) => {
    const newUser = req.body;

    try {
        const content = await userService.addUser(newUser);

        return res.status(200).json(content);
    } catch (e) {
        return res.status(400).json(error);
    }
};
