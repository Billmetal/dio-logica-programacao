# ⚔️ Jogo de Aventura em JavaScript: Classes de Heróis

## 💡 Descrição do Projeto

Este projeto é um exercício prático em JavaScript focado no uso de **Classes e Objetos** para simular heróis de uma aventura. O objetivo principal é criar uma estrutura genérica capaz de representar diferentes tipos de heróis (mago, guerreiro, monge, ninja) e, através de um método simples, exibir sua ação de ataque, variando a descrição do ataque conforme o tipo do herói.

O código demonstra conceitos essenciais da **Programação Orientada a Objetos (POO)** em JavaScript, como:
* **Classe (`class Heroi`)**: Um molde para a criação de heróis.
* **Construtor (`constructor`)**: Para inicializar as propriedades `nome`, `idade` e `tipo`.
* **Métodos (`atacar`)**: Funções que definem o comportamento do objeto.
* **Estruturas de Decisão (`switch`)**: Usadas para determinar a descrição do ataque.

---

## 🛠️ Funcionalidades

A classe `Heroi` possui as seguintes funcionalidades:

* **Propriedades**: Armazena o `nome`, `idade` e `tipo` do herói.
* **Método `atacar()`**:
    * Verifica a propriedade `tipo` do herói.
    * Define uma descrição de ataque específica:
        * `mago`: "usou magia"
        * `guerreiro`: "usou espada"
        * `monge`: "usou artes marciais"
        * `ninja`: "usou shuriken"
    * Exibe a mensagem formatada: `"o {tipo} atacou usando {ataque}"`.

---

## 🚀 Como Rodar o Projeto

Este é um projeto em JavaScript puro, ideal para ser executado em um ambiente Node.js ou diretamente no console do seu navegador.

1.  **Copie o código** da classe `Heroi` e da demonstração.
2.  **Salve** em um arquivo chamado `index.js` (ou similar).
3.  **Execute** via terminal (se tiver Node.js instalado):
    ```bash
    node index.js
    ```
4.  **Ou abra** o arquivo JavaScript no console do navegador e veja as saídas.

---
