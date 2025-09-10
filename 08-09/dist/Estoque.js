"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Estoque {
    constructor() {
        this.itens = [];
    }
    // Adiciona qualquer item do tipo T
    adicionar(item) {
        this.itens.push(item);
    }
    // Retorna todos os itens
    listar() {
        return this.itens;
    }
    // Remove um item pelo índice
    remover(indice) {
        this.itens.splice(indice, 1);
    }
}
exports.default = Estoque;
