import { Livro } from "./Livro";
import { Roupa } from "./Roupa";

export class EstoqueLivro {
    private livros: Livro[] = [];
  
    adicionar(livro: Livro) { this.livros.push(livro); }
    listar() { return this.livros; }
  }
  
  