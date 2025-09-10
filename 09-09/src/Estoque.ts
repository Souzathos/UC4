import { isTemplateExpression, isTemplateSpan } from "typescript"


export class Estoque<T> {
    itens:T[] = []
   
    
    adicionar(item:T):void{
        this.itens.push(item)
        console.log(`Item cadastrado`)
    }

    listar(): T[]{
        return this.itens   
    }

    remover(indice:number): void {
        this.itens.splice(indice, 1)
    }

    buscar(nome: (item:T) => boolean):T[] {
          return this.itens
    }

}