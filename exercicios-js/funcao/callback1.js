const fabricantes = ["BYD", "Honda", "Harley Davidson"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(a) {
    console.log(a)
})

//ou

fabricantes.forEach(fabricante => console.log(fabricante))

//dá no mesmo, só chamei 'a' de 'fabricante'