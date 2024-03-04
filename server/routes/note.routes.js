const express = require("express");
const noteRouter = express.Router({ mergeParams: true });
const noteController = require("../controllers/note.controller");

noteRouter.get("/", noteController.getNotes);
noteRouter.post("/", noteController.addNote);

module.exports = noteRouter;
