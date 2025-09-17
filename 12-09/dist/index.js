"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calculadora_1 = require("./Calculadora");
const Desenhista_1 = require("./Desenhista");
const Mensageiro_1 = require("./Mensageiro");
const calc = new Calculadora_1.Calculadora();
//passando number
calc.somar(1, 2);
// passando strings
calc.somar("Athos", " de souza");
const mensagem = new Mensageiro_1.Mensageiro();
mensagem.enviar(['boi novo', 'decks', "clara godoy + tres pila"], "falta 3 píla");
// 👇 Testando
const d = new Desenhista_1.Desenhista();
d.desenhar(10); // Desenhando um círculo de raio 10
d.desenhar(20, 30); // Desenhando um retângulo de 20x30
