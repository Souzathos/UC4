"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heroi = void 0;
const Personagem_1 = require("./Personagem");
class Heroi extends Personagem_1.Personagem {
    constructor(nome, nivel, honra, missoes) {
        super(nome, nivel, missoes);
        this.honra = honra;
    }
    status() {
        console.log(`Honra: ${this.honra} \nNome: ${this.nome} \nNível: ${this.nivel}`);
    }
}
exports.Heroi = Heroi;
