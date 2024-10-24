//par nome/valor
const saudacao = 'Oba, bão?' //contexto léxico 1

function exec() {
    let saudacao = "Bão, uai" //contexto léxico 2
    return saudacao
}

//Objetos são grupos alinhados de pares nome/valor
const cliente = {
    nome: 'Gabriel',
    idade: 27,
    peso: 110,
    endereco: {
        logradouro: 'Travessa Cento e Noventa e Um',
        numero: 47
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)