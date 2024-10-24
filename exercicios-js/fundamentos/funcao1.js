//funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a+b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 6)
imprimirSoma()


//funcao com retorno
function soma(a, b = 0) { //se o valor fosse 1, o console.log da linha 17 traria número 3.
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))
