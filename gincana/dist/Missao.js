"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Missao = void 0;
class Missao {
    constructor(titulo, dificuldade) {
        this.titulo = titulo;
        this.dificuldade = dificuldade;
    }
    criaMissao(titulo, dificuldade) {
        const missao = new Missao(titulo, dificuldade);
    }
    getTitulo() {
        return this.titulo;
    }
    getDificuldade() {
        return this.dificuldade;
    }
}
exports.Missao = Missao;
