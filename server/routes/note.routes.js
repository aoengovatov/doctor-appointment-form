const express = require("express");
const noteRouter = express.Router({ mergeParams: true });
const noteController = require("../controllers/note.controller");

router.get("/", noteController.getNotes);
router.post("/", noteController.addNote);

module.exports = noteRouter;
