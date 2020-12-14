const express = require("express");
const router = express.Router();

const clientController = require("../controller/clients");

router.route("/").get(clientController.getAllClients);
router.route("/").post(clientController.createNewClient);

router.route("/:id").get(clientController.getClientById);
router.route("/:id").put(clientController.updateClient);

module.exports = router;