const escola = "Cod3r"

console.log(escola.charAt(4)); //exibe o caractere de da posição 4
console.log(escola.charAt(5)); //não existe caractere na posição 5, retornando um espaço vazio
console.log(escola.charCodeAt(3)); //retorna o valor do caractere em Unicode
console.log(escola.indexOf('3'));
console.log(escola.substring(1)); //lê a string a partir da posição 1
console.log(escola.substring(0, 3)); //lê a string a partir da posição 0 e ignora a posição 3 e as seguintes.

console.log('Escola '.concat(escola).concat("!"));
console.log("Escola " + escola + "!");

console.log(escola.replace(3, 'e')); //troca o valor pedido pelo pelo caractere após a vírgula

console.log("Ana,Maria,Pedro".split(",")); //divide a string através do caractere indicado.