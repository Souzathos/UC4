import { Local } from "./Local";

export class Abrigo extends Local {
    protected capacidade:number
    protected vagasOcupadas:number

    constructor(nome:string, endereco:string, cidade:string, telefone:string, capacidade:number, vagasOcupadas:number){
        super(nome, endereco, cidade, telefone )
        this.capacidade = capacidade
        this.vagasOcupadas = vagasOcupadas
    }
    
    mostrarInfo():string {
        return `Nome: ${this.nome} | Endereço: ${this.endereco} | Cidade: ${this.cidade} | Telefone: ${this.telefone} | Capacidade: ${this.getCapacidade()} | Vagas disponíveis: ${this.getVagasDisponiveis()}`
    }

    ocuparvaga(qtd:number):void {
        this.vagasOcupadas += qtd
    }
    getVagasDisponiveis():number{
        return this.capacidade - this.vagasOcupadas
    }   

    getCapacidade():number {
        return this.capacidade
    }

    
}