import { IProduto } from "./IProduto";

export class Loja<T> implements IProduto {
    produtos: T[]
    nome: string;
    preco: number;
    garantia?: Date;
    tamanho?:string

    constructor(nome:string, preco:number, produtos:T[]) {
        this.preco = preco
        this.produtos = produtos
        this.nome = nome
    }
    

    adicionar(produto:T):void {
        this.produtos.push(produto)
    }

    listar():T[] {
        return this.produtos
    }

    calcularTotal():number {  
        return 5 + 1
    }
}


