"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vilao = void 0;
const Personagem_1 = require("./Personagem");
class Vilao extends Personagem_1.Personagem {
    constructor(nome, nivel, infamia, missoes) {
        super(nome, nivel, missoes);
        this.infamia = infamia;
    }
    status() {
        console.log(`Infâmia: ${this.infamia} \nNome: ${this.nome} \nNível: ${this.nivel}`);
    }
}
exports.Vilao = Vilao;
