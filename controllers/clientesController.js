const clientes = require("../models/clientes");

const clientesController = {
    listarClientes: (req, res)=> {
        let clientesMostrar = clientes.listarUsuarios()
        res.send(clientesMostrar)
    }
}

module.exports = clientesController