import { readBuilderProgram } from "typescript";
import { Publicacao } from "./Publicacao";
import * as readline from 'readline-sync';
import { Artigo } from "./Artigo";

export class Biblioteca {
    publicacoes:Publicacao[] = []

    adicionar(publicacao:Publicacao): void {
        console.log(`Publicação adicionada com sucesso! `)
        this.publicacoes.push(publicacao)
    }
    
    buscarPorTitulo(titulo:string):Publicacao[] {
       
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

        return this.publicacoes.filter(pub => titulo.toLocaleLowerCase().trim() === pub.titulo.toLocaleLowerCase().trim())
        
    } 


}