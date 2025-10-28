# 🎮 Calculadora de Partidas Rankeadas

## 📋 Descrição

Este projeto é um desafio de lógica de programação que calcula o saldo de vitórias de um jogador em partidas rankeadas e determina seu nível competitivo. O sistema utiliza funções para processar vitórias e derrotas, retornando o saldo e a classificação do jogador.

## 🎯 Objetivo

Criar uma função que receba como parâmetro a quantidade de vitórias e derrotas de um jogador, calcule o saldo (vitórias - derrotas) e retorne o nível do jogador baseado na quantidade total de vitórias.

## 🏆 Níveis de Classificação

O jogador é classificado de acordo com a seguinte tabela de vitórias:

| Vitórias              | Nível      |
|-----------------------|------------|
| Menor que 10          | Ferro      |
| Entre 11 e 20         | Bronze     |
| Entre 21 e 50         | Prata      |
| Entre 51 e 80         | Ouro       |
| Entre 81 e 90         | Diamante   |
| Entre 91 e 100        | Lendário   |
| 101 ou mais           | Imortal    |

## 💻 Tecnologias Utilizadas

- JavaScript

## 🚀 Como Executar

1. Clone o repositório
2. Execute o arquivo JavaScript usando Node.js:
```bash
node calculadora-rankeadas.js
```

Ou copie o código e execute diretamente no console do navegador (F12).

## 📤 Saída Esperada

O programa exibe uma mensagem no formato:
```
O Herói tem de saldo de **[saldoVitorias]** vitórias e está no nível de **[nivel]**
```

## 📝 Exemplo de Uso

```javascript
let vitorias = 75;
let derrotas = 30;

let resultado = calcularNivel(vitorias, derrotas);

// Saída: O Herói tem de saldo de 45 vitórias e está no nível de Ouro
```

## 🔧 Função Principal

```javascript
function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;
    
    // Estrutura de decisão para determinar o nível
    // ...
    
    return { saldoVitorias, nivel };
}
```

## 🎓 Conceitos Aplicados

- ✅ Variáveis
- ✅ Operadores (aritméticos e de comparação)
- ✅ Laços de repetição
- ✅ Estruturas de decisão (if/else)
- ✅ Funções com parâmetros e retorno
- ✅ Objetos JavaScript

## 💡 Funcionalidades

- Cálculo automático do saldo de vitórias
- Classificação por níveis baseada em vitórias
- Retorno de objeto estruturado com saldo e nível
- Função reutilizável para múltiplos jogadores

## 👨‍💻 Autor

Desenvolvido como parte do desafio de formação em lógica de programação.

---

⭐ **Dica:** Você pode criar um "fork" deste repositório para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original!
