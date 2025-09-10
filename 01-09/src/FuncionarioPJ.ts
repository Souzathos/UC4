import { Funcionario } from "./Funcionario";

export class FuncionarioPJ extends Funcionario {
    nome:string
    valorHora:number
    horaTrabalho:number
    constructor(nome:string, valoHora:number, horaTrabalho:number){
        super(nome)
        this.valorHora = valoHora
        this.horaTrabalho = horaTrabalho
    }

    calcularSalario(): number {
        return this.valorHora * this.horaTrabalho
    }
}