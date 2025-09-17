"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publicacao = void 0;
class Publicacao {
    constructor(titulo, ano) {
        this.ano = ano;
        this.titulo = titulo;
    }
    exibir() {
        console.log(`Título: ${this.titulo} \nAno: ${this.ano}`);
    }
}
exports.Publicacao = Publicacao;
