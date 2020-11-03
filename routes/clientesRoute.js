const express = require("express");
const router = express.Router();
const clientes = require("../clientes");
const clientesControllers = require("../controllers/clientesController");

router.get("/", clientesController.listarClientes)

module.exports = router