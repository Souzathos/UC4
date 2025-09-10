class Estoque<T> {
    private itens: T[] = [];
  
    // Adiciona qualquer item do tipo T
    adicionar(item: T): void {
      this.itens.push(item);
    }
  
    // Retorna todos os itens
    listar(): T[] {
      return this.itens;
    }
  
    // Remove um item pelo índice
    remover(indice: number): void {
      this.itens.splice(indice, 1);
    }

    buscar(condicao: (item:T) => boolean):T[]{
      return this.itens.filter(condicao);
    }
  }
  
  export default Estoque;
