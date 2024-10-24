const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2);

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(3));
//a função .toFixed limita o número de casas decimais
console.log(media.toString()); //se colocar um 2 nos parênteses, o valor da const/let/var, se number, é convertido para binário.
console.log(typeof media);