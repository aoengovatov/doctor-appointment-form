const jwt = require("jsonwebtoken");
const config = require("../config/default.json");

exports.verifyJwt = (token) => {
    try {
        return jwt.verify(token, config.JWT_SECRET);
    } catch (e) {
        throw Error("Ошибка доступа.");
    }
};
