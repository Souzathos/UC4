import { IPublicacao } from "./IPublicacao";

export abstract class Publicacao implements IPublicacao {
    titulo:string
    ano:number

    constructor(titulo:string, ano:number) {
        this.ano = ano
        this.titulo = titulo
    }

    exibir(): void {
        console.log(`Título: ${this.titulo} \nAno: ${this.ano}`)
    }
}