import { Cla } from "./Cla";

export class ClaNara extends Cla {
    nomeDoCla: string;
    lider: string;

    constructor(nomeCla:string, lider:string){
        super(nomeCla, lider)
    }

    habilidadesEspeciais(): void {
        console.log(`Manipulação das sombras`)
    }

    exibirDetalhes(): void {
        console.log(`Lider atual: ${this.lider}`)
    }
    
}