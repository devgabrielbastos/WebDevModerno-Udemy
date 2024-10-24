const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Uepa!') //cuidado! js é uma linguagem fracamente tipada, daí isso ele puxa como um valor abaixo de 7.