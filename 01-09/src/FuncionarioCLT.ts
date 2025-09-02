import { Funcionario } from "./Funcionario";

export class FuncionarioCLT extends Funcionario {
    nome:string

    constructor(nome:string){
        super(nome)
    }
    calcularSalario(salario:number): number {
        return salario
    }
}