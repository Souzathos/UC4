export class Estoque {
    private produtos: string[];
  
    constructor() {
      this.produtos = ["Arroz", "Feijão", "Macarrão", "Óleo", "Açúcar"];
    }
  
    remover(item: string | string[]): void {
      const itensParaRemover = Array.isArray(item) ? item : [item];
      const removidos: string[] = [];
      const naoEncontrados: string[] = [];
  
      itensParaRemover.forEach((produto) => {
        const index = this.produtos.indexOf(produto);
        if (index !== -1) {
          this.produtos.splice(index, 1);
          removidos.push(produto);
        } else {
          naoEncontrados.push(produto);
        }
      });
  
      if (removidos.length > 0) {
        console.log(`Produtos removidos: ${removidos.join(", ")}`);
      }
      if (naoEncontrados.length > 0) {
        console.log(`Produtos não encontrados: ${naoEncontrados.join(", ")}`);
      }
    }
  
    listarProdutos(): void {
      console.log("Estoque atual:", this.produtos.join(", "));
    }
  }
  
