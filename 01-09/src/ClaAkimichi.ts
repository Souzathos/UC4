import { Cla } from "./Cla";

export class ClaAkimishi extends Cla {
    nomeDoCla: string;
    lider: string;

    constructor(nomeCla:string, lider:string){
        super(nomeCla, lider)
    }

    habilidadesEspeciais(): void {
        console.log(`Amplicação corporal`)
    }

    exibirDetalhes(): void {
        console.log(`Lider atual: ${this.lider}`)
    }
    
}