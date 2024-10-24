function piru() {
    this.centímetros = 0

    setInterval(function() {
        this.centímetros++
        console.log(`o piru tem ${this.centímetros} centímetros`)
    }.bind(this), 1000)
}

new piru


function pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

// new pessoa


// AQUI TEM DUAS FORMAS DE FAZER ISSO
// A PRIMEIRA FORMA EU ACHEI MAIS FÁCIL
// A SEGUNDA FORMA ACHEI QUE DEVE FUNCIONAR MELHOR EM ALGUNS CASOS
// MAS É TENEBROSO MESMO
// PIRU KKKKKKKKKKKKKKKKKKKKKK