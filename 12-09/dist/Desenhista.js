"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Desenhista = void 0;
class Desenhista {
    desenhar(a, b) {
        if (b === undefined) {
            console.log(`Desenhando um círculo de raio ${a}`);
        }
        else {
            console.log(`Desenhando um retângulo de ${a}x${b}`);
        }
    }
}
exports.Desenhista = Desenhista;
// 👇 Testando
const d = new Desenhista();
d.desenhar(10); // Desenhando um círculo de raio 10
d.desenhar(20, 30); // Desenhando um retângulo de 20x30
