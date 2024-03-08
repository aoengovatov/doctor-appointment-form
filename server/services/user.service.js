const User = require("../models/User");

exports.getUser = async (email, password) => {
    try {
        const data = await User.find(email, password);

        return data;
    } catch (e) {
        throw Error("Ошибка. User не найден");
    }
};

exports.addUser = async (payload) => {
    try {
        const data = await User.create(payload);

        return data;
    } catch (e) {
        if (e.code === 11000) {
            throw Error("Такой email уже занят");
        }
        throw Error("Ошибка. User не найден");
    }
};
