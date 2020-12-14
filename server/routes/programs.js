const express = require("express");
const router = express.Router();

const programController = require("../controller/programs");

router.route("/").get(programController.getAllPrograms);
router.route("/clients/:client_id").get(programController.getClientPrograms);
router.route("/clients/:client_id").post(programController.createNewProgram);

router.route("/:id").get(programController.getProgramById);
router.route("/:id").put(programController.updateProgram);

module.exports = router;