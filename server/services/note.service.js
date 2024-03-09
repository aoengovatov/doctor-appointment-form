const Note = require("../models/Note");
const jwt = require("jsonwebtoken");
const config = require("../config/default.json");

exports.getNotes = async (token) => {
    try {
        jwt.verify(token, config.JWT_SECRET);
        const data = await Note.find().sort("createdAt");

        return data;
    } catch (e) {
        throw Error("Ошибка получения Notes. У Вас недостаточно прав.");
    }
};

exports.addNote = async (payload) => {
    try {
        const newNote = await Note.create(payload);

        return newNote;
    } catch (e) {
        throw Error("Ошибка создания Note");
    }
};
