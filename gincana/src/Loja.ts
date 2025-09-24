import { IProduto } from "./IProduto";

export class Loja<T extends IProduto>{
    produtos: T[] = []
   

    adicionar(produto:T):void {
        this.produtos.push(produto)
    }

    listar():T[] {
        return this.produtos
    }


    calcularTotal():number {
        let soma = 0  
        this.produtos.forEach(produto => {
            soma += produto.preco
            
        }); return soma
    }
}


