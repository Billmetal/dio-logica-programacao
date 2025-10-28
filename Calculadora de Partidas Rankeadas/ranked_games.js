// Desafio: Calculadora de Partidas Rankeadas

// Função para calcular o saldo de vitórias e determinar o nível
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de Rankeadas (vitórias - derrotas)
    let saldoVitorias = vitorias - derrotas;
    let nivel;
    
    // Estrutura de decisão para determinar o nível baseado nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    
    // Retorna o saldo e o nível
    return { saldoVitorias, nivel };
}

// Exemplo de uso
let vitorias = 75;
let derrotas = 30;

let resultado = calcularNivel(vitorias, derrotas);

// Saída: Exibir mensagem com o saldo e o nível
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} vitórias e está no nível de ${resultado.nivel}`);

// Testando com diferentes valores
console.log("\n--- Testando outros jogadores ---\n");

function exibirResultado(vitorias, derrotas) {
    let resultado = calcularNivel(vitorias, derrotas);
    console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} vitórias e está no nível de ${resultado.nivel}`);
}

exibirResultado(5, 2);      // Ferro
exibirResultado(15, 5);     // Bronze
exibirResultado(35, 10);    // Prata
exibirResultado(60, 20);    // Ouro
exibirResultado(85, 15);    // Diamante
exibirResultado(95, 5);     // Lendário
exibirResultado(120, 10);   // Imortal
