"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estoque = void 0;
class Estoque {
    constructor() {
        this.itens = [];
    }
    adicionar(item) {
        this.itens.push(item);
        console.log(`Item cadastrado`);
    }
    listar() {
        return this.itens;
    }
    remover(indice) {
        this.itens.splice(indice, 1);
    }
    buscar(nome) {
        return this.itens;
    }
}
exports.Estoque = Estoque;
