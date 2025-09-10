import { Funcionario } from "./Funcionario";

export class FuncionarioCLT extends Funcionario {
    nome:string
    salarioFixo:number

    constructor(nome:string, salario:number){
        super(nome)
        this.salarioFixo = salario
    }
    calcularSalario(): number {
        return this.salarioFixo
    }
}