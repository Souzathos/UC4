import { Missao } from "./Missao";
import { Personagem } from "./Personagem";

export class Heroi extends Personagem { 
    honra:number

    constructor(nome:string, nivel:number, honra:number, missoes:Missao[]){
        super(nome, nivel, missoes)
        this.honra = honra
    }

    status(): void {
        console.log(`Honra: ${this.honra} \nNome: ${this.nome} \nNível: ${this.nivel}`)
    }
}