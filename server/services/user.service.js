const User = require("../models/User");

exports.getUser = async (email, password) => {
    try {
        const data = User.find(email, password);
    } catch (e) {
        throw Error("Ошибка. User не найден");
    }
};

exports.addUser = async (payload) => {
    try {
        const data = User.create(payload);
    } catch (e) {
        throw Error("Ошибка. User не найден");
    }
};
