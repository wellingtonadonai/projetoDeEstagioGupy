// lampadas
let lampadas = [false, false, false]; // Inicialmente, todas as lâmpadas estão apagadas

// ligar um interruptor
function ligarInterruptor(interruptor) {
    lampadas[interruptor] = !lampadas[interruptor]; // Inverte o estado da lâmpada controlada pelo interruptor
}

// Simulação de duas idas até a sala das lâmpadas
ligarInterruptor(0); //indo a primeira vez
ligarInterruptor(0); // indo a segunda vez

// Verifica o estado das lâmpadas após as duas idas
for (let i = 0; i < lampadas.length; i++) {
    if (lampadas[i]) {
        console.log(`O interruptor ${i+1} controla uma lâmpada que está acesa.`);
    } else {
        console.log(`O interruptor ${i+1} controla uma lâmpada que está apagada.`);
    }
}
