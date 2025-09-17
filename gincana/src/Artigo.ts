import { Publicacao } from "./Publicacao";

export class Artigo extends Publicacao{
    doi:string

    constructor(titulo:string, ano:number, doi:string) {
        super(titulo, ano)
        this.doi = doi
    }

    exibir(): void {
        console.log(`Título: ${this.titulo} \nAno: ${this.ano} \nDOI: ${this.doi}`)
    }
}