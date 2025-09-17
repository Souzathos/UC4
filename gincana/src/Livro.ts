import { Publicacao } from "./Publicacao";

export class Livro extends Publicacao {
    autor:string

    constructor(titulo:string, ano:number, autor:string) {
        super(titulo, ano)
        this.autor = autor
    }

    exibir(): void {
        console.log(`Título: ${this.titulo} \nAno: ${this.ano} \nAutor: ${this.autor}`)
    }
}