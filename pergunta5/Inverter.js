function inverterString(converter) {
    let novaString = '';
    for (let i = converter.length - 1; i >= 0; i--) {
        novaString += converter[i];
    }
    return novaString;
}

// como fazer para usar 

let StringAtual = 'Deus é maravilhoso';
let stringInvertida = inverterString(StringAtual);
console.log('String original:', StringAtual);
console.log('String invertida:', stringInvertida);
