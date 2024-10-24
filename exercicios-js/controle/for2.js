const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Nat',
    sobrenome: 'Pontes',
    idade: 22,
    peso: 65
}

for(let info in pessoa) {
    console.log(`${info} = ${pessoa[info]}`)
}

