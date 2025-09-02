import { Cla } from "./Cla";

export class ClaHyuga extends Cla {
    nomeDoCla: string;
    lider: string;

    constructor(nomeCla:string, lider:string){
        super(nomeCla, lider)
    }

    habilidadesEspeciais(): void {
        console.log(`Byakugan`)
    }

    exibirDetalhes(): void {
        console.log(`Lider atual: ${this.lider}`)
    }
    
}