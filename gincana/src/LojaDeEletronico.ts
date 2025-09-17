import { Loja } from "./Loja";

export class LojaDeEletronico<T> extends Loja<T> {
    
    constructor(produtos:T[], nome:string, preco:number){
        super(nome, preco, produtos)
        
    }

    listar(): T[] {
        return this.produtos

    }
}