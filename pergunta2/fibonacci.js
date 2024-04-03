function verificaFibonacci(numero) {

    let PrimeiroNumero = 0;
    let Segundonumero = 1;

    while (Segundonumero < numero) {

        let soma = Segundonumero;
        Segundonumero = PrimeiroNumero + Segundonumero;
        PrimeiroNumero = soma;
    }
    return Segundonumero === numero;
}

let numeroInformado = parseInt (prompt ("Digite um número para verificar se pertence à sequência de Fibonacci: "));

//deixei comentado o console caso deseje executar no console do navegador ou em outro console 
// No caso e so comentar o alert por boas praticas

if (verificaFibonacci(numeroInformado)) {
    //console.log(`O número ${numeroInformado} pertence à sequência de Fibonacci.`);
    alert(`O número ${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    //console.log(`O número ${numeroInformado} não pertence à sequência de Fibonacci.`);
    alert(`O número ${numeroInformado} não pertence à sequência de Fibonacci.`);
}

