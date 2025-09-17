import { Heroi } from "./Heroi"
import { Missao } from "./Missao"

export abstract class Personagem {
    protected nome:string
    protected nivel:number
    private missoes:Missao[] = []

    constructor(nome:string, nivel:number, missao:Missao[]){
        this.nome = nome
        this.nivel = nivel
        this.missoes = missao
    }

    aceitarMissao(missao:Missao):void {
        if(missao.getDificuldade() <= this.nivel) {
            console.log(`Missão ${missao.getTitulo()} de dificuldade ${missao.getDificuldade()} aceita! `)
            this.missoes.push(missao)
        } else {
            console.log(`Você não tem nível suficiente para fazer essa missão. \nNível mínimo: ${missao.getDificuldade()} \nSeu nível: ${this.nivel}`)
        }
        
    }

    concluirMissao(missao:Missao):void {
        for(let i = 0; i < this.missoes.length; i ++) {
            if(missao === this.missoes[i]){
                this.nivel += 10
                console.log(`Missão ${missao.getTitulo()} concluida! \nSeu nível aumentou em mais 10!`)
                 
            } else {
                console.log(`Nenhuma missão para concluir`)
            }
        }
        
    }

    abstract status():void 
}

