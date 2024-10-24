let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Oba!'
}

oba = () => 'Opa!'
ola = _ => 'Opa!' //diferente da linha acima, essa função contém um parâmetro
console.log(ola())