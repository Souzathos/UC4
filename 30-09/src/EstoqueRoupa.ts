import { Roupa } from "./Roupa";

export class EstoqueRoupa {
    private roupas: Roupa[] = [];
  
    adicionar(roupa: Roupa) { this.roupas.push(roupa); }
    listar() { return this.roupas; }
  }