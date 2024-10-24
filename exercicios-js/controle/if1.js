function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('BOA MLK, ARROCHOU DEMAIS, TIROU LOGO UM '+ nota +' TAPORRAAAAAA');
    }
    // else if(nota < 7) {
    //     console.log('você é triste demais fi, tirou só '+ nota +', precisa estudar mais.');
    // }

    //deixei essa parte de cima comentada pq não tá na aula, mas funcionou!
}

soBoaNoticia(8.1)
soBoaNoticia(6.5)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' +valor)
    }
}

seForVerdadeEuFalo() // falso
seForVerdadeEuFalo(null) // falso
seForVerdadeEuFalo(undefined) // falso
seForVerdadeEuFalo(NaN) // falso
seForVerdadeEuFalo('') // falso
seForVerdadeEuFalo(0) // falso
seForVerdadeEuFalo(-1) // verdade
seForVerdadeEuFalo(' ') // verdade
seForVerdadeEuFalo('?') // verdade
seForVerdadeEuFalo([]) // verdade
seForVerdadeEuFalo([1,2]) // verdade
seForVerdadeEuFalo(({})) // verdade