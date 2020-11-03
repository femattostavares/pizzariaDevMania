const express = require("express");
const app = express();
const cardapio = require("./cardapio");
const clientesRoute = require("./routes/clientesRoute");

app.get("/", (req, res)=> {
    res.send("Bem vindo(a) à pizzaria DevMania!")
})
app.get("/pizzas", (req, res)=> {
    let cardapioMostrar = cardapio.listarCardapio()
    res.send(cardapioMostrar)
})
app.get("pizzas/:nome", (req, res)=> {
    let pizzaMostrar = cardapio.buscarPizza(req.params.nome)
    res.send(pizzaMostrar)
})
app.use("/clientes", clientesRoute)

app.listen(3030, ()=> console.log("Servidor tá 10!"))
