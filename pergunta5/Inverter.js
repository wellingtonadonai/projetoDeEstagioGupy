function inverterString(converter) {
    let novaString = '';
    for (let i = converter.length - 1; i >= 0; i--) {
        novaString += converter[i];
    }
    return novaString;
}

// como fazer para usar: é so colocar o valor na stringAtual
// da para usar em forma de array também [5,4,3,2,1] porem achei assim melhor "5,4,3,2,1"

let StringAtual = "5,4,3,2,1";

let stringInvertida = inverterString(StringAtual);

console.log('String original:', StringAtual);

console.log('String invertida:', stringInvertida);
