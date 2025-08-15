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
        monstro.setVida(monstro.getVida() - this.forca) 
        console.log(`Você deu ${this.forca} de dano. O monstro ${monstro.getNome()} está com ${monstro.getVida()} pontos de vida.`)

    }
    dano(monstro:Monstro):void {
        this.setVida(this.vida - monstro.getForca())
        console.log(`Você sofreu ${monstro.getForca()} pontos de dano. Agora você tem ${this.vida} pontos de vida.`)
    }

    curar(cura:number):void{
        if(this.vida + cura < 100){
            this.setVida(this.vida + cura)
            console.log(`Você se curou! sua vida agora é de: ${this.getVida()}`)
        } else {
            console.log(`Você não pode usar essa cura! ela irá superar sua vida máxima.`)

            this.vida + cura
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



    setForca(forca:number):void {
        this.forca = forca
    }

    setVida(vida:number):void {
        this.vida = vida
    }

}
