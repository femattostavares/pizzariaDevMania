const cardapio = [
    {
        sabor:"Calabresa",
        preco: 30
    },
    {
        sabor: "Quatro queijos",
        preco: 35
    },
    {
        sabor: "Atum",
        preco: 25
    }
]

function listarCardapio(){
    return cardapio;
}

function buscarPizza(nome){
    let resultadoBusca = cardapio.find( (pizza)=> {
        return pizza.sabor == nome;
    })
    return resultadoBusca;
}

module.exports = {listarCardapio, buscarPizza}