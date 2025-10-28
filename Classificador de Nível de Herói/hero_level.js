// Desafio: Classificador de Nível de Herói

// Variáveis para armazenar nome e XP do herói
let nomeHeroi = "Thor";
let xpHeroi = 7500;

// Variável para armazenar o nível
let nivel;

// Estrutura de decisão para classificar o nível baseado no XP
if (xpHeroi < 1000) {
    nivel = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivel = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Saída: Exibir mensagem com o nome e nível do herói
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);

// Exemplos com diferentes valores de XP
console.log("\n--- Testando outros heróis ---\n");

function classificarHeroi(nome, xp) {
    let nivelHeroi;
    
    if (xp < 1000) {
        nivelHeroi = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivelHeroi = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivelHeroi = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivelHeroi = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivelHeroi = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivelHeroi = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivelHeroi = "Imortal";
    } else {
        nivelHeroi = "Radiante";
    }
    
    console.log(`O Herói de nome ${nome} está no nível de ${nivelHeroi}`);
}

// Testando com diferentes níveis
classificarHeroi("Iron Man", 500);      // Ferro
classificarHeroi("Capitão América", 1500);  // Bronze
classificarHeroi("Homem-Aranha", 3000);     // Prata
classificarHeroi("Hulk", 6000);             // Ouro
classificarHeroi("Thor", 7500);             // Platina
classificarHeroi("Doutor Estranho", 8500); // Ascendente
classificarHeroi("Visão", 9500);            // Imortal
classificarHeroi("Thanos", 15000);          // Radiante
