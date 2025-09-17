"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artigo = void 0;
const Publicacao_1 = require("./Publicacao");
class Artigo extends Publicacao_1.Publicacao {
    constructor(titulo, ano, doi) {
        super(titulo, ano);
        this.doi = doi;
    }
    exibir() {
        console.log(`Título: ${this.titulo} \nAno: ${this.ano} \nDOI: ${this.doi}`);
    }
}
exports.Artigo = Artigo;
