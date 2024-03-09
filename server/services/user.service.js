const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/default.json");

exports.loginUser = async (email, password) => {
    try {
        const user = await User.findOne({ email });

        if (user) {
            const isCorrectPassword = await bcrypt.compare(password, user.password);
            if (isCorrectPassword) {
                return jwt.sign({ email: user.email }, config.JWT_SECRET, {
                    expiresIn: "1800s",
                });
            } else {
                throw Error("Неверный пароль");
            }
        }
        throw Error("Ошибка. User не найден");
    } catch (e) {
        throw Error(e.message);
    }
};

exports.addUser = async ({ email, password, role }) => {
    const hashPassword = await bcrypt.hash(password, 10);

    try {
        const data = await User.create({ email, password: hashPassword, role });

        return data;
    } catch (e) {
        if (e.code === 11000) {
            throw Error("Такой email уже занят");
        }
        throw Error("Ошибка. User не найден");
    }
};
