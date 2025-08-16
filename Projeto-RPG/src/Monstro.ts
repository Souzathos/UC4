import { Personagem } from "./Personagem"

export class Monstro {
    private nome:string
    private vida:number
    private forca:number
    

    constructor(nome:string, vida:number, forca:number) {
        this.nome = nome
        this.vida = vida
        this.forca = forca
    }
    

    atacar(personagem:Personagem):void { 
        
        personagem.dano(this)     
        
       
    }
    dano(persomagem:Personagem):void {
        this.setVida(this.vida - persomagem.getForca())
        console.log(`Você sofreu ${persomagem.getForca()} pontos de dano. Agora você tem ${this.vida} pontos de vida.`)
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

    setVida(novaVida:number):void{
        this.vida = novaVida
    }


    setForca(novaForca:number):void{
        this.forca = novaForca
    }

}


