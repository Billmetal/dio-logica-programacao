/**
 * Classe genérica que representa um herói de uma aventura.
 */
class Heroi {
  
  /**
   * Construtor da classe Heroi.
   * @param {string} nome - O nome do herói.
   * @param {number} idade - A idade do herói.
   * @param {string} tipo - O tipo do herói (ex: "guerreiro", "mago", "monge", "ninja").
   */
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  /**
   * Método que exibe o ataque do herói com base no seu tipo.
   */
  atacar() {
    let ataque = ""; // Variável para armazenar a descrição do ataque

    // Estrutura de decisão para definir o ataque com base no tipo
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        // Caso o tipo não seja um dos esperados
        ataque = "um ataque genérico";
    }

    // Exibição da saída conforme solicitado
    // Usamos 'this.tipo' para acessar a propriedade da classe
    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// --- Demonstração de Uso ---

// 1. Criando instâncias (Objetos) da classe Heroi
const heroiMago = new Heroi("Merlin", 150, "mago");
const heroiGuerreiro = new Heroi("Arthur", 32, "guerreiro");
const heroiMonge = new Heroi("Aang", 112, "monge");
const heroiNinja = new Heroi("Naruto", 17, "ninja");

// 2. Chamando o método atacar() para cada herói
console.log("--- Início dos Ataques ---");

heroiMago.atacar();       // Saída esperada: o mago atacou usando magia
heroiGuerreiro.atacar();  // Saída esperada: o guerreiro atacou usando espada
heroiMonge.atacar();      // Saída esperada: o monge atacou usando artes marciais
heroiNinja.atacar();      // Saída esperada: o ninja atacou usando shuriken
