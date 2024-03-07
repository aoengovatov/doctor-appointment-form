const noteService = require("../services/note.service");

exports.getNotes = async (req, res) => {
    try {
        const content = await noteService.getNotes();

        return res.status(200).json(content);
    } catch (e) {
        return res.status(400).json(error);
    }
};

exports.addNote = async (req, res) => {
    const newNote = req.body;
    console.log(newNote);
    try {
        const content = await noteService.addNote(newNote);

        return res.status(201).json(content);
    } catch (e) {
        return res.status(400).json(e);
    }
};
