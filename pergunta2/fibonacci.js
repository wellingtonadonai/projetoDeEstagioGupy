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


if (verificaFibonacci(numeroInformado)) {
    alert(`O número ${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    alert(`O número ${numeroInformado} não pertence à sequência de Fibonacci.`);
}

