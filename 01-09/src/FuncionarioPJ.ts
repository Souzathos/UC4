import { Funcionario } from "./Funcionario";

export class FuncionarioPJ extends Funcionario {
    nome:string

    constructor(nome:string){
        super(nome)
    }

    calcularSalario(ganhoPorHora: number, horasTrabalhadas:number): number {
        return (ganhoPorHora * horasTrabalhadas) * 22
    }
}