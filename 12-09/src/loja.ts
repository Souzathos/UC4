export class Loja {
    private produtos: string[];
  
    constructor() {
      this.produtos = []; // Estoque inicial vazio
    }
  
    adicionarProduto(produto: string | string[]): void {
      if (typeof produto === "string") {
        this.produtos.push(produto);
        console.log(`Produto adicionado: ${produto}`);
      } else if (Array.isArray(produto)) {
        this.produtos.push(...produto);
        console.log(`Produtos adicionados: ${produto.join(", ")}`);
      }
    }
  
    listarProdutos(): void {
      console.log("Estoque atual:", this.produtos.join(", "));
    }
  }
  