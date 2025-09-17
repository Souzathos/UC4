"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor() {
        this.publicacoes = [];
    }
    adicionar(publicacao) {
        console.log(`Publicação adicionada com sucesso! `);
        this.publicacoes.push(publicacao);
    }
    buscarPorTitulo(titulo) {
        /* for(let i = 0; i < this.publicacoes.length; i++) {
            if(titulo.toLocaleLowerCase().trim() === this.publicacoes[i].titulo.toLocaleLowerCase().trim()) {
                const novoArray = this.publicacoes.filter((titulo) => {
                    [this.publicacoes[i] === titulo]
                } )
                return novoArray

            }else {
                console.log(`Publicação não encontrada`)
            }
        } */
        /*return this.publicacoes.filter(pub => {
            if(pub.titulo.toLocaleLowerCase().trim()){
                console.log(`Publicação encontrada ${pub.titulo}`)
            }
        })*/
        return this.publicacoes.filter(pub => titulo.toLocaleLowerCase().trim() === pub.titulo.toLocaleLowerCase().trim());
    }
}
exports.Biblioteca = Biblioteca;
