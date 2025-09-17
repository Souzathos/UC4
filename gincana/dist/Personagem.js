"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    constructor(nome, nivel, missao) {
        this.missoes = [];
        this.nome = nome;
        this.nivel = nivel;
        this.missoes = missao;
    }
    aceitarMissao(missao) {
        if (missao.getDificuldade() <= this.nivel) {
            console.log(`Missão ${missao.getTitulo()} de dificuldade ${missao.getDificuldade()} aceita! `);
            this.missoes.push(missao);
        }
        else {
            console.log(`Você não tem nível suficiente para fazer essa missão. \nNível mínimo: ${missao.getDificuldade()} \nSeu nível: ${this.nivel}`);
        }
    }
    concluirMissao(missao) {
        for (let i = 0; i < this.missoes.length; i++) {
            if (missao === this.missoes[i]) {
                this.nivel += 10;
                console.log(`Missão ${missao.getTitulo()} concluida! \nSeu nível aumentou em mais 10!`);
            }
            else {
                console.log(`Nenhuma missão para concluir`);
            }
        }
    }
}
exports.Personagem = Personagem;
