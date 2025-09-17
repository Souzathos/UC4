import { Missao } from "./Missao";
import { Personagem } from "./Personagem";

export class Vilao extends Personagem { 
    infamia:number

    constructor(nome:string, nivel:number, infamia:number, missoes:Missao[]){
        super(nome, nivel, missoes)
        this.infamia = infamia
    }

    status(): void {
        console.log(`Infâmia: ${this.infamia} \nNome: ${this.nome} \nNível: ${this.nivel}`)
    }
}