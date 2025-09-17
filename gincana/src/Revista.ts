import { Publicacao } from "./Publicacao";

export class Revista extends Publicacao{
    edicao:string

    constructor(titulo:string, ano:number, edicao:string) {
        super(titulo, ano)
        this.edicao = edicao
    }

    exibir(): void {
        console.log(`Título: ${this.titulo} \nAno: ${this.ano} \nEdição: ${this.edicao}`)
    }
}