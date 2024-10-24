const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(2, 1)
imprimirResultado(2, 1, soma)
imprimirResultado(2, 1, function (x, y) {
    return x - y
}) //aqui foi mudado para subtração

imprimirResultado(2, 1, (x, y) => x * y) //aqui foi mudado pra multiplicação, usando arrowFunction de forma mais simplificada

//outra forma de criar uma função anônima é colocando ela dentro de um objeto
const pessoa = {
    falar() { //nessa linha poderia ser também escrito assim: "falar: funcion () {" 
        console.log('iiiiiiaê, aqui é o Zangado!')
    }
}

pessoa.falar()