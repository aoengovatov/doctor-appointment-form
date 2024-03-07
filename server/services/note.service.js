const Note = require("../models/Note");

exports.getNotes = async () => {
    try {
        const data = Note.find().sort("createdAt");
        return data;
    } catch (e) {
        throw Error("Ошибка получения Notes");
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
