const Note = require("../models/Note");

exports.getNotes = async () => {
    try {
        const data = Note.find();
    } catch (e) {
        throw Error("Ошибка получения Notes");
    }
};

exports.addNote = async (payload) => {
    try {
        const newNote = await Note.create(payload);

        return newTodo;
    } catch (e) {
        throw Error("Ошибка создания Note");
    }
};