"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
const Publicacao_1 = require("./Publicacao");
class Livro extends Publicacao_1.Publicacao {
    constructor(titulo, ano, autor) {
        super(titulo, ano);
        this.autor = autor;
    }
    exibir() {
        console.log(`Título: ${this.titulo} \nAno: ${this.ano} \nAutor: ${this.autor}`);
    }
}
exports.Livro = Livro;
