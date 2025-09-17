"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revista = void 0;
const Publicacao_1 = require("./Publicacao");
class Revista extends Publicacao_1.Publicacao {
    constructor(titulo, ano, edicao) {
        super(titulo, ano);
        this.edicao = edicao;
    }
    exibir() {
        console.log(`Título: ${this.titulo} \nAno: ${this.ano} \nEdição: ${this.edicao}`);
    }
}
exports.Revista = Revista;
