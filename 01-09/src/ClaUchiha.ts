import { Cla } from "./Cla";

export class ClaUchiha extends Cla {
    nomeDoCla: string;
    lider: string;

    constructor(nomeCla:string, lider:string){
        super(nomeCla, lider)
    }

    habilidadesEspeciais(): void {
        console.log(`Sharingan`)
    }

    exibirDetalhes(): void {
        console.log(`Lider atual: ${this.lider}`)
    }
    
}