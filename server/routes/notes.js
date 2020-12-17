const express = require("express");
const router = express.Router();

const noteController = require("../controller/notes");

router.route("/").get(noteController.getAllNotes);
router.route("/programs/:programId").get(noteController.getNotesByProgram);
router.route("/programs/:programId").post(noteController.createNewNote);

router.route("/:id").get(noteController.getUniqueNote);
router.route("/:id").put(noteController.updateNote);

module.exports = router;