import { Monstro } from "./Monstro";

export class Personagem {
    private nome:string;
    private classe:string;
    private vida:number
    private forca:number

    constructor(nome:string, classe:string, vida:number, forca:number) {
        this.nome = nome
        this.classe = classe
        this.vida = vida
        this.forca = forca
    }

    atacar(monstro:Monstro):void {
        let novaVida = monstro.getVida() - this.forca 
        monstro.setVida(novaVida) 
        console.log(`Você deu ${this.forca} de dano. O mosntro ${monstro.getNome()} está com ${monstro.getVida()} pontos de vida.`)
        
    }

    dano(monstro:Monstro):void {
        this.vida - monstro.getForca()
        console.log(`Você sofreu ${monstro.getForca()} pontos de dano. Agora você tem ${this.vida} pontos de vida.`)
    }

    curar(cura:number):void{
        if(this.vida + cura < 100){
            this.vida + cura
        } else {
            console.log(`Você está com a vida máxima.`)
        }
    }
    getNome():string{ 
        return this.nome
    }

    getVida():number{
        return this.vida
    }

    getForca():number {
        return this.forca
    }

    getClasse():string{
        return this.classe
    }
}