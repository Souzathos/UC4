export class Missao {
    titulo:string
    dificuldade:number

    constructor(titulo:string, dificuldade:number){
        this.titulo = titulo
        this.dificuldade = dificuldade
    }

    criaMissao(titulo:string, dificuldade:number):void {
        const missao = new Missao(titulo, dificuldade)
    }

    getTitulo():string {
        return this.titulo
    }

    getDificuldade():number {
        return this.dificuldade
    }
}