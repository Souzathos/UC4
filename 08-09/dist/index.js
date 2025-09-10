"use strict";
/* function retornaItem<T>(item: T): T {
    return item;
  }
  
  retornaItem<number>(10);     // ✅ retorna um número
  retornaItem<string>("oi");   // ✅ retorna uma string
  retornaItem<boolean>(true);  // ✅ retorna um boolean

  function pegaPrimeiro<T>(lista: T[]): T {
    return lista[0];
  }
  
  const numeros = [1, 2, 3];
  const palavras = ["a", "b", "c"];
  
  pegaPrimeiro(numeros);  // 1

  function mostraTamanho<T extends { length: number }>(item: T): number {
    return item.length;
  }
  
  mostraTamanho("Oi");        // ✅ funciona (string tem length)
  mostraTamanho([1, 2, 3]);   // ✅ funciona (array tem length)

  function mostraValor<T extends string | number>(valor: T): T {
    return valor;
  }
  
  mostraValor("Olá");  // ✅ string permitido
  mostraValor(123);    // ✅ number permitido


  interface TemNome {
    nome: string;
  }
  
  function mostraNome<T extends TemNome>(obj: T): string {
    return obj.nome;
  }
  
  mostraNome({ nome: "Ana" });             // ✅ ok
  mostraNome({ nome: "João", idade: 20 }); // ✅ ok

  interface Identificavel {
    id: number;
  }
  
  interface Nomeavel {
    nome: string;
  }
  
  function mostraInfo<T extends Identificavel & Nomeavel>(obj: T) {
    console.log(obj.id, obj.nome);
  }
  
  mostraInfo({ id: 1, nome: "Ana" }); // ✅ funciona
  
  interface RespostaAPI<T> {
    data: T;
    sucesso: boolean;
  }
  
  type Usuario = { id: number; nome: string };
  
  const respostaUsuario: RespostaAPI<Usuario> = {
    data: { id: 1, nome: "Ana" },
    sucesso: true,
  };
  
  const respostaNumeros: RespostaAPI<number[]> = {
    data: [10, 20, 30],
    sucesso: true,
  };
  
   */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Estoque_1 = __importDefault(require("./Estoque"));
const Livro_1 = require("./Livro");
const Roupa_1 = require("./Roupa");
const estoqueRoupas = new Estoque_1.default();
estoqueRoupas.adicionar(new Roupa_1.Roupa("Camiseta preta", "GG"));
const estoqueLivros = new Estoque_1.default;
estoqueLivros.adicionar(new Livro_1.Livro("O senhor dos anéis", "J.R.R. Tolkien"));
console.log(estoqueLivros.listar());
