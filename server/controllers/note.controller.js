const noteService = require("../services/note.service");

exports.getNotes = async (req, res) => {
    const token = req.headers.user;

    try {
        const content = await noteService.getNotes(token);

        return res.status(200).json(content);
    } catch (e) {
        return res.status(400).json(e.message);
    }
};

exports.addNote = async (req, res) => {
    const newNote = req.body;

    try {
        const content = await noteService.addNote(newNote);

        return res.status(201).json(content);
    } catch (e) {
        return res.status(400).json(e);
    }
};
