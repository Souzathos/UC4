import { Local } from "./Local";

export class Abrigo extends Local {
    protected capacidade:number
    protected vagasOcupadas:number

    constructor(nome:string, endereco:string, cidade:string, telefone:string){
        super(nome, endereco, cidade, telefone )
    }
}